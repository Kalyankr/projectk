import NextAuth from "next-auth";
import { getUserById } from "./lib/data/user";
import { getTwoFactorConfirmationByUserId } from "./lib/data/two-factor-confirmation";
import { UserRole } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./lib/data/db";
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
    newUserVerification: "/auth/new-user-verification",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/new-user",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OaAuth user with email verification
      if (account?.provider !== "credentials") {
        return true;
      }

      if (!user?.id) {
        return false;
      }

      const existingUser = await getUserById(user.id);
      // prevent user from signing in if email is not verified
      if (!existingUser || !existingUser?.emailVerified) {
        return false;
      }
      // prevent user from signing in if two factor is enabled
      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id,
        );
        if (!twoFactorConfirmation) {
          return false;
        }
        // TODO : Delete the two factor confirmation after successful login
        await db.twoFactorConfirmation.delete({
          where: {
            id: twoFactorConfirmation.id,
          },
        });
      }

      return true;
    },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token;
      }
      const existingUser = await getUserById(token.sub);

      if (!existingUser) {
        return token;
      }

      token.role = existingUser.role;
      return token;
    },
  },
  ...authConfig,
});
