import prismadb from "@/libs/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "GET") {
    res.status(405).end();
  }
  try {
    const { userId } = req.query;

    let address;
    if (req.method === "GET") {
      address = await prismadb.address.findUnique({
        where: {
          userId: userId as string,
        },
      });
    }
    if (req.method === "POST") {
      const { userId, building, area, zipcode, country } = req.body;

      address = await prismadb.address.create({
        data: {
          name: building,
          address: area,
          zipcode,
          country,
          userId,
        },
      });
    }
    res.status(200).json(address);
  } catch (error) {
    console.error(error);
    res.status(409).end();
  }
}
