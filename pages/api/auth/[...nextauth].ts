import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import client from "@/libs/prismadb";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Invalid Credentials");
        }
        const user = await client.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials from database");
        }
        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword as string
        );
        if (!isCorrectPassword) {
          throw new Error("Invalid password");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  adapter: PrismaAdapter(client),
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
