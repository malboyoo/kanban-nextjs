import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { authorId, id, name, columns } = req.body;
  if (req.method === "POST") {
    try {
      const newBoard = await prisma.board.create({
        data: {
          authorId: authorId,
          name: name,
        },
      });

      const newColumns = await Promise.all(
        [
          { name: "To do", index: 0 },
          { name: "In progress", index: 1 },
          { name: "Done", index: 3 },
        ].map(async (col) =>
          prisma.column.create({
            data: {
              boardId: newBoard.id,
              name: col.name,
              index: col.index,
            },
          })
        )
      );

      res.status(200).json(newBoard);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else if (req.method === "PATCH") {
    try {
      const updatedBoard = await prisma.board.update({
        where: { id: id },
        data: {
          name: name,
        },
      });

      res.status(200).json(updatedBoard);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else if (req.method === "DELETE") {
    try {
      const deletedBoard = await prisma.board.delete({
        where: { id: id },
      });

      res.status(200).json(deletedBoard);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "incorrect request method" });
  }
}
