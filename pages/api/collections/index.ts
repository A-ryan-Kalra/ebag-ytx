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
    const category = await prismadb.categories.findMany();
    let arr: any = [];
    category.forEach((i: any) => {
      if (!arr.includes(i.name)) {
        arr.push(i.name);
      }
    });
    return res.status(200).json(arr);
  } catch (error) {
    console.error(error);
    return res.status(409).end();
  }
}
