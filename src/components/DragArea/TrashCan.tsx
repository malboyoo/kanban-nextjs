"use client";

import { Droppable } from "react-beautiful-dnd";

export default function TrashCan() {
  return (
    <Droppable droppableId="trash">
      {(provided, snapshot) => (
        <i
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`block fa-solid fa-trash-can text-6xl absolute bottom-[-150px] w-1 h-1 ${
            snapshot.isDraggingOver && "text-red-500"
          }`}
        >
          {provided.placeholder}
        </i>
      )}
    </Droppable>
  );
}
