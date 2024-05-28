import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    if (req.method === "POST") {
      const { title, price, thumbnail, stock, description, brand, categories } =
        req.body;
      const { currentUser } = await serverAuth(req, res);
      const currentUsersOrder = await prismadb.orders.findMany({
        where: {
          userId: currentUser.id,
        },
      });

      let result = [];

      if (
        currentUsersOrder.length !== 0 &&
        currentUsersOrder.some((i: any) => i.title === title)
      ) {
        result = await prismadb.orders.findUnique({
          where: {
            title: title,
          },
        });
        if (!result) {
          console.error("Order not found");
          res.status(409).end();
        }
        result.quantity = result.quantity + 1;
        const updateOrder = await prismadb.orders.update({
          where: {
            title: title,
          },
          data: {
            quantity: result.quantity,
          },
        });
        return res.status(200).json(updateOrder);
      } else {
        result = await prismadb.orders.create({
          data: {
            title,
            description,
            thumbnail,
            userId: currentUser.id,
            quantity: 1,
            price,
            stock,
            brand,
            orderStatus: "pending",
            categories,
          },
        });

        return res.status(200).json(result);
      }
    }
    if (req.method === "GET") {
      const { currentUser } = await serverAuth(req, res);

      const orders = await prismadb.orders.findMany({
        where: {
          userId: currentUser.id,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(200).json(orders);
    }
  } catch (error) {
    console.error(error);
    res.status(409).end();
  }
}
