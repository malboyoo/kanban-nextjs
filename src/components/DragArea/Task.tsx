"use client";

import { Draggable } from "react-beautiful-dnd";

export default function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <li
          className="list-none cursor-grab mt-5 w-5/6"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            className={`alert-info p-4 rounded-xl w-full flex justify-center items-center
          ${snapshot.isDragging && "bg-blue-400"}`}
          >
            <span className="text-slate-900 text-lg font-semibold">{task.content}</span>
          </div>
        </li>
      )}
    </Draggable>
  );
}
