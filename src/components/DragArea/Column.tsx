"use client";
import Task from "./Task";

export default function Column({ column }) {
  console.log(column);

  return (
    <div className="flex flex-col items-center card w-64 bg-base-100 shadow-xl min-h-[400px] overflow-hidden">
      <h3 className=" text-2xl text-center font-semibold p-4 bg-base-200 w-full ">{column.name}</h3>
      <ul className="w-5/6">
        {column.tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    </div>
  );
}
