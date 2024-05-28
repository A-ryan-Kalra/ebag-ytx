import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const { currentUser } = await serverAuth(req, res);

    const completedOrder = await prismadb.ordersStatus.findMany({
      where: {
        userId: currentUser?.id,
      },
    });
    return res.status(200).json(completedOrder);
  } catch (error) {
    console.error(error);
    res.status(409).end();
  }
}
