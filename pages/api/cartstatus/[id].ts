import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    res.status(405).end();
  }
  try {
    const { currentUser } = await serverAuth(req, res);
    const { id } = req.query;
    const { status } = req.body;
    // console.log(status);
    // console.log(id);
    const order = await prismadb.orders.findUnique({
      where: {
        id: id as string,
      },
    });
    if (status === "minus") {
      if (order.quantity > 1) {
        order.quantity -= 1;
      }
    } else {
      order.quantity += 1;
    }
    const orderUpdated = await prismadb.orders.update({
      where: {
        id: id as string,
      },
      data: {
        quantity: order.quantity,
      },
    });
    // console.log(order);
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(409).end();
  }
}
