"use client";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

export default function Column({ column }) {
  return (
    <div className="flex flex-col items-center card w-64 bg-base-100 shadow-xl min-h-[400px]">
      <h3 className=" text-2xl text-center font-semibold p-4 bg-base-200 w-full rounded-t-xl ">{column.name}</h3>
      <Droppable droppableId={column.id.toString()}>
        {(provided, snapshot) => (
          <ul
            className={`w-full h-full rounded-b-xl flex flex-col items-center ${
              snapshot.isDraggingOver && "border-2 border-blue-600"
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
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
