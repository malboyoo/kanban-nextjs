"use client";

import { Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import CreateTask from "./CreateTask";

export default function Task({ task, index, column, boardData }) {
  const [active, setActive] = useState(false);

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <li
          className="list-none cursor-grab my-3 w-5/6"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {active && <CreateTask setActive={setActive} column={column} boardData={boardData} edit={true} task={task} />}
          <div
            onClick={() => setActive(true)}
            className={`alert-info p-4 rounded-xl w-full flex justify-center items-center
          ${snapshot.isDragging ? "bg-blue-400 opacity-90" : "bg-blue-300"} ${
              snapshot.draggingOver === "trash" && "bg-transparent border-dashed border-red-600 border-2"
            }`}
          >
            <span className="text-slate-900 text-lg font-semibold">{task.content}</span>
          </div>
        </li>
      )}
    </Draggable>
  );
}
