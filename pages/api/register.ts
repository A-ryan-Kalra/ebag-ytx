import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";
import { hash } from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  try {
    // const { currentUser } = await serverAuth(req, res);

    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      throw new Error("Credentials incomplete");
    }
    const existingUser = await prismadb.user.findUnique({
      where: { email: email },
    });
    if (existingUser) {
      return res.status(422).json({
        error: "Email already taken",
      });
    }

    const hashedPassword = await hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        username,
        hashedPassword,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(409).end();
  }
}
