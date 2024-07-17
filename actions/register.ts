"use server";
import bcrypt from "bcryptjs";
import { actionClient } from "@/lib/create-safe-action";
import { getUserByEmail } from "@/lib/data/user";
import { RegisterSchema } from "@/schemas";
import db from "@/lib/data/db";
import { generateVerificationToken } from "@/lib/data/tokens";
import { sendVerificationEmail } from "@/lib/data/mail";

export const registerUser = actionClient
  .schema(RegisterSchema)
  .action(async (data) => {
    const user = data.parsedInput;

    // Check if user already exists
    const existingUser = await getUserByEmail(user.email);
    if (existingUser) {
      return { error: "User already exists" };
    }

    // Create user
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await db.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    });

    // Send verification email
    const verificationToken = await generateVerificationToken(user.email);
    // send verification email
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );

    return {
      success: "Registration successfully, Please confirm your email to login",
    };
  });
