"use server";

import db from "@/lib/data/db";
import { getUserByEmail } from "@/lib/data/user";
import { getVerificationTokenByToken } from "@/lib/data/verification-token";

export const newUserVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Invalid token!, token cannot be verified" };
  }
  const hasExpired =
    new Date(existingToken.expires).getTime() < new Date().getTime();

  if (hasExpired) {
    return { error: "Token has expired! Please request a new one" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: {
      id: existingToken.id,
    },
  });
  return {
    success: "Email verified successfully!",
  };
};
