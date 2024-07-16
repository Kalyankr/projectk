"use server";

import { signIn } from "@/auth";
import { actionClient } from "@/lib/create-safe-action";
import db from "@/lib/data/db";
import {
  sendVerificationEmail,
  sendTwoFactorTokenEmail,
} from "@/lib/data/mail";
import {
  generateVerificationToken,
  generateTwoFactorToken,
} from "@/lib/data/tokens";
import { getTwoFactorConfirmationByUserId } from "@/lib/data/two-factor-confirmation";
import { getTwoFactorTokenByEmail } from "@/lib/data/two-factor-token";
import { getUserByEmail } from "@/lib/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";

export const loginUser = actionClient
  .schema(LoginSchema)
  .action(async (data) => {
    const { email, password, twoFactorCode: code } = data.parsedInput;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
      return { error: "Email does not exist, please sign up to continue." };
    }

    if (!existingUser.emailVerified) {
      const verificationToken = await generateVerificationToken(
        existingUser.email,
      );
      await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token,
      );
      return {
        success: "Please verify before login, Verification email sent.",
      };
    }
    if (existingUser.isTwoFactorEnabled && existingUser.email) {
      if (code) {
        const twoFactorToken = await getTwoFactorTokenByEmail(
          existingUser.email,
        );
        if (!twoFactorToken) {
          return { error: "Invalid code!" };
        }
        if (twoFactorToken.token !== code) {
          return { error: "Invalid code!" };
        }
        const hasExpired = new Date(twoFactorToken.expires) < new Date();
        if (hasExpired) {
          return { error: "Code has expired!" };
        }

        await db.twoFactorToken.delete({
          where: {
            id: twoFactorToken.id,
          },
        });

        const existingConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id,
        );

        if (existingConfirmation) {
          await db.twoFactorConfirmation.delete({
            where: {
              id: existingConfirmation.id,
            },
          });
        }

        await db.twoFactorConfirmation.create({
          data: {
            userId: existingUser.id,
          },
        });
      } else {
        const twoFactorToken = await generateTwoFactorToken(existingUser.email);
        await sendTwoFactorTokenEmail(existingUser.email, twoFactorToken.token);
        return {
          success: "Please enter the two factor token sent to your email.",
          twoFactor: true,
        };
      }
    }
    try {
      await signIn("credentials", {
        email,
        password,
        redirectTo: DEFAULT_LOGIN_REDIRECT,
      });
    } catch (error) {
      if (error instanceof AuthError) {
        throw new Error("Invalid Email or Password");
      }
      throw error;
    }
  });
