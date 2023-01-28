"use client";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

export default function Column({ column }) {
  return (
    <div className="flex flex-col items-center card w-64 bg-base-100 shadow-xl min-h-[400px] overflow-hidden">
      <h3 className=" text-2xl text-center font-semibold p-4 bg-base-200 w-full ">{column.name}</h3>
      <Droppable droppableId={column.id.toString()}>
        {(provided, snapshot) => (
          <ul className="w-5/6" ref={provided.innerRef} {...provided.droppableProps}>
            {column.tasks.map((task, index) => {
              return <Task task={task} key={task.id} index={index} />;
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
