import { PrismaClient } from "@prisma/client";
import Task from "@/components/Task";

const prisma = new PrismaClient();

export default async function page({ params }) {
  const board = await prisma.board.findUnique({ where: { id: parseInt(params.id) }, include: { tasks: true } });

  return (
    <main className="flex-auto bg-base-300 h-full flex flex-col justify-start items-center">
      <h2 className="text-3xl text-accent opacity-60 mt-5">{board.name}</h2>
      <section className="flex flex-row justify-around w-full mt-10">
        <div className="flex flex-col items-center card w-64 bg-base-100 shadow-xl min-h-[400px] overflow-hidden">
          <h3 className=" text-2xl text-center font-semibold p-4 bg-base-200 w-full ">TO-DO</h3>
          <ul>
            {board.tasks.map((task) => {
              if (task.col === 0) {
                return <Task task={task} key={task.id} />;
              }
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center card w-64 bg-base-100 shadow-xl min-h-[400px] overflow-hidden">
          <h3 className=" text-2xl text-center font-semibold w-full p-4 bg-base-200">IN-PROGRESS</h3>
          <ul>
            {board.tasks.map((task) => {
              if (task.col === 1) {
                return <Task task={task} key={task.id} />;
              }
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center card w-64 bg-base-100 shadow-xl min-h-[400px] overflow-hidden">
          <h3 className="text-2xl text-center font-semibold w-full p-4 bg-base-200 ">COMPLETED</h3>
          <ul>
            {board.tasks.map((task) => {
              if (task.col === 2) {
                return <Task task={task} key={task.id} />;
              }
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
