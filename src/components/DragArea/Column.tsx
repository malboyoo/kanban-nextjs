"use client";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import AddTask from "./AddTask";
import { Task as TaskI } from "@prisma/client";

export default function Column({ column, boardData }) {
  return (
    <div className="flex flex-col items-center w-64  min-h-[400px]">
      <div className="w-full bg-base-100 shadow-xl card flex flex-col items-center">
        <h3 className="flex justify-center items-center text-2xl text-center font-semibold p-4 bg-base-200 w-full rounded-t-xl ">
          <span
            className={`bg-orange-400 w-5 h-5 rounded-full mr-5 block
          ${
            column.name === "To do" ? "bg-orange-400" : column.name === "In progress" ? "bg-yellow-400" : "bg-green-400"
          }`}
          ></span>
          <span className="block leading-relaxed">{column.name}</span>
        </h3>
        <Droppable droppableId={column.id.toString()}>
          {(provided, snapshot) => (
            <ul
              className={`w-full rounded-b-xl flex flex-col items-center justify-start mb-3 min-h-[100px] ${
                snapshot.isDraggingOver && "border-2 border-blue-600 border-dashed "
              }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {column.tasks.map((task: TaskI, index: Number) => {
                return <Task task={task} key={task.id} index={index} column={column} boardData={boardData} />;
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
        <AddTask column={column} boardData={boardData} />
      </div>
    </div>
  );
}
