import { PrismaClient } from "@prisma/client";
import DragArea from "@/components/DragArea/DragArea";

const prisma = new PrismaClient();

export default async function page({ params }) {
  const board = await prisma.board.findUnique({
    where: { id: parseInt(params.id) },
    include: { columns: { include: { tasks: true } } },
  });

  return (
    <main className="bg-base-300 h-fit flex flex-col justify-start items-center">
      <h2 className="text-3xl text-accent opacity-60 mt-5">{board.name}</h2>
      <DragArea board={board} />
    </main>
  );
}
