"use server";

import * as z from "zod";
import { NewPasswordSchema } from "@/schemas";
import { actionClient } from "@/lib/create-safe-action";
import bcrypt from "bcryptjs";
import db from "@/lib/data/db";
import { getPasswordResetTokenByToken } from "@/lib/data/password-reset-token";
import { getUserByEmail } from "@/lib/data/user";

const TokenSchema = z.union([z.string().uuid(), z.null()]);

export const newPassword = actionClient
  .schema(NewPasswordSchema)
  .bindArgsSchemas<[token: z.ZodUnion<[z.ZodString, z.ZodNull]>]>([TokenSchema])
  .action(
    async ({
      parsedInput: { newPassword, confirmPassword },
      bindArgsParsedInputs: [token],
    }) => {
      if (!token) {
        return { error: "Token is required" };
      }

      const existingToken = await getPasswordResetTokenByToken(token);
      if (!existingToken) {
        return { error: "Invalid token" };
      }

      if (existingToken.expires < new Date()) {
        return { error: "Token has expired" };
      }

      const existingUser = await getUserByEmail(existingToken.email);

      if (!existingUser) {
        return { error: "Email does not exist!" };
      }

      if (newPassword !== confirmPassword) {
        return { error: "Passwords do not match" };
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await db.user.update({
        where: { id: existingUser.id },
        data: { password: hashedPassword },
      });
      await db.passwordResetToken.delete({ where: { id: existingToken.id } });

      return { success: "Password updated successfully" };
    },
  );
