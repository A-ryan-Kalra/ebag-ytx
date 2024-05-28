import prismadb from "@/libs/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
  }
  try {
    const { userId, orderedCarts } = req.body;
    // console.log(userId);
    // console.log(orderedCarts);
    // console.log("orderedCarts");

    let statusCompleted: any = [];
    orderedCarts.map(async (i: any) => {
      statusCompleted = await prismadb.ordersStatus.create({
        data: {
          brand: i?.brand,
          categories: i?.categories,
          description: i?.description,
          orderStatus: "completed",
          price: i?.price,
          quantity: i?.quantity,
          title: i?.title,
          userId: i?.userId,
          thumbnail: i?.thumbnail,
        },
      });
    });
    const order = await prismadb.orders.deleteMany({
      where: {
        userId,
      },
    });
    // console.log(statusCompleted);
    // console.log("statusCompleted");
    // console.log(order);
    // console.log("order");
    // console.log("userId");
    res.status(200).json({ statusCompleted, order });
  } catch (error) {
    console.error(error);
    res.status(405).end();
  }
}
