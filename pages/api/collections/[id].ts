import prismadb from "@/libs/prismadb";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const { id } = req.query;

    let categories;
    if (id === "electronics") {
      categories = await prismadb.categories.findMany({
        where: {
          OR: [
            {
              name: {
                startsWith: "smartphones",
              },
            },
            {
              name: {
                startsWith: "laptops",
              },
            },
            {
              name: {
                startsWith: "laptop",
              },
            },
          ],
        },
        include: {
          product: true,
        },
      });
    } else if (id === "all") {
      categories = await prismadb.categories.findMany({
        include: {
          product: true,
        },
      });
    } else {
      categories = await prismadb.categories.findMany({
        where: {
          name: {
            startsWith: id,
          },
        },
        include: {
          product: true,
        },
      });
    }
    let arr: any = [];

    categories.map((ik: any) => {
      ik.product.filter((i: any) => arr.push({ ...i, name: ik?.name }));
    });

    return res.status(200).json(arr);
  } catch (error) {
    console.error(error);
    return res.status(409).end();
  }
}
