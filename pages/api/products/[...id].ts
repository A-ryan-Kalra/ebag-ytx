import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const { id } = req.query;

    const brand = id?.[0];
    const title = id?.[1];

    const products = await prismadb.categories.findMany({
      where: {
        name: {
          startsWith: brand,
        },
      },
      include: {
        product: true,
      },
    });
    let selected = products?.filter((produc: any) => {
      return produc?.product.some((item: any) => item?.title === title);
    });
    // console.log(selected);
    // const selected=products.map((product)=>)
    return res.status(200).json(selected);
  } catch (error) {
    console.error(error);
    return res.status(409).end();
  }
}
