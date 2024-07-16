"use server";

import * as z from "zod";
import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/lib/data/user";
import { actionClient } from "@/lib/create-safe-action";
import { sendPasswordResetEmail } from "@/lib/data/mail";
import { generatePasswordResetToken } from "@/lib/data/tokens";

export const resetPassword = actionClient
  .schema(ResetSchema)
  .action(async (data) => {
    const user = data.parsedInput;

    // Check if user already exists
    const existingUser = await getUserByEmail(user.email);
    if (!existingUser) {
      return { error: "Email not found!" };
    }
    // Send password reset email
    const passwordResetToken = await generatePasswordResetToken(user.email);
    await sendPasswordResetEmail(
      passwordResetToken.email,
      passwordResetToken.token,
    );

    return {
      success: "Password reset email sent!",
    };
  });
