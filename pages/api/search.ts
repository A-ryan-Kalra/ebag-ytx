import prismadb from "@/libs/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const { search } = req.query;
    // console.log(search);

    const searchedItem = await prismadb.products.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search as string,
            },
          },
          {
            brand: {
              contains: search as string,
            },
          },
          {
            description: {
              contains: search as string,
            },
          },
          {
            category: {
              some: {
                name: {
                  contains: search as string,
                },
              },
            },
          },
        ],
      },
      include: {
        category: true,
      },
    });
    let arr: any = [];
    let selected = searchedItem?.map((produc: any) => {
      const { category, images, url, ...rest } = produc;
      produc?.category.map((item: any) =>
        arr.push({ ...rest, name: item?.name })
      );
    });
    // console.log(arr);
    // console.log("selected");
    // console.log(searchedItem);

    res.status(200).json(arr);
  } catch (error) {
    console.error(error);
    res.status(409).end();
  }
}
