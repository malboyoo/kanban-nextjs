import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await prisma.user.update({
      where: { id: 1 },
      data: {
        theme: req.body,
      },
    });

    res.status(200).json({ name: "John Doe" });
  }
}
