import prismadb from "@/libs/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    res.status(405).end();
  }
  try {
    const { id } = req.query;
    const { building, area, zipcode, country } = req.body;

    let address;

    address = await prismadb.address.update({
      where: {
        userId: id as string,
      },
      data: {
        name: building,
        address: area,
        zipcode,
        country,
      },
    });

    res.status(200).json(address);
  } catch (error) {
    console.error(error);
    res.status(409).end();
  }
}
