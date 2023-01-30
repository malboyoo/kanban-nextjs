"use client";

import { Column, Task } from "@prisma/client";
import { useRouter } from "next/navigation";
import { addTask } from "utils/requests";

export default function CreateTask({ setActive, column, boardData }) {
  const [board, setBoardData] = boardData;

  async function handleSubmit(value: string) {
    const newTask = {
      columnId: column.id,
      content: value,
      priority: 1,
    };
    const data: Task = await addTask(newTask);

    const newColumns = board.columns.map((col: Column) => {
      if (col.id === data.columnId) {
        col.tasks = [...col.tasks, data];
      }
      return col;
    });
    console.log({ ...board, columns: newColumns });

    setBoardData({ ...board, columns: newColumns });
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-[100vh] opacity-50 bg-black backdrop-blur-3xl blur-lg b z-10"
        onClick={() => setActive(false)}
      ></div>
      <div className="fixed sm:top-1/4 sm:left-[50%]  h-[300px] w-[400px] translate-x-[-50%] bg-base-200 rounded-2xl z-20">
        <form
          className="w-full h-full py-4 px-10 flex flex-col justify-start items-center"
          onSubmit={(event: any) => {
            event.preventDefault();
            const taskContent: string = event.target.content.value;
            handleSubmit(event.target.content.value);
            setActive(false);
          }}
        >
          <label htmlFor="content" className="text-2xl my-3 text-center ">
            Task content
          </label>
          <textarea
            name="content"
            defaultValue=""
            className="rounded-2xl overflow-hidden p-4 resize-none text-lg w-full my-5"
          ></textarea>
          <div className="flex justify-center gap-10 my-5">
            <button
              className="btn btn-outline btn-error"
              onClick={(event) => {
                event.preventDefault();
                setActive(false);
              }}
            >
              cancel
            </button>
            <button className="btn btn-outline btn-success" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
