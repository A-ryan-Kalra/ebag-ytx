import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    res.status(405).end();
  }
  try {
    const { currentUser } = await serverAuth(req, res);
    const { orderId } = req.query;
    // console.log(orderId, " orderID");
    const orderDeleted = await prismadb.orders.delete({
      where: {
        id: orderId as string,
      },
    });
    res.status(200).json(orderDeleted);
  } catch (error) {
    console.error(error);
    res.status(409).end();
  }
}
