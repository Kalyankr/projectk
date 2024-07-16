"use server";

import { signIn } from "@/auth";
import { actionClient } from "@/lib/create-safe-action";
import { sendVerificationEmail } from "@/lib/data/mail";
import { generateVerificationToken } from "@/lib/data/tokens";
import { getUserByEmail } from "@/lib/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";

export const loginUser = actionClient
  .schema(LoginSchema)
  .action(async (data) => {
    const { email, password } = data.parsedInput;

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
