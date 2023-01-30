import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, columnId } = req.body;

  if (req.method === "PUT") {
    try {
      await prisma.task.update({
        where: { id: id },
        data: {
          columnId: columnId,
        },
      });
      res.status(200).json({ message: "task updated sucessfully" });
    } catch (error) {
      res.status(400).json({ message: "database error:", error });
    }
  } else if (req.method === "DELETE") {
    try {
      await prisma.task.delete({
        where: { id: id },
      });
      res.status(200).json({ message: "task deleted sucessfully" });
    } catch (error) {
      res.status(400).json({ message: "database error:", error });
    }
  } else if (req.method === "POST") {
    try {
      const response = await prisma.task.create({
        data: {
          ...req.body,
        },
      });
      console.log(response);

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: "database error:", error });
    }
  } else {
    res.status(400).json({ message: "Wrong method" });
  }
}
