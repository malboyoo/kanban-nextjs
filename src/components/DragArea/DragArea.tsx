"use client";
import { resetServerContext } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import Column from "./Column";
import { Column as ColumnI, Task } from "@prisma/client";

export default function DragArea({ board }) {
  const [boardData, setBoardData] = useState(board);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      console.log("no destination");

      return;
    }
    const sameColumn = destination.droppableId === source.droppableId;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      console.log("exactly same spot");

      return;
    }

    // SOURCE

    const columnSource = boardData.columns.find((col: ColumnI) => col.id.toString() === source.droppableId);

    const newTasksSource = Array.from(columnSource.tasks);

    const tmp = newTasksSource.find((task: Task) => task.id.toString() === draggableId);

    newTasksSource.splice(source.index, 1);
    if (sameColumn) {
      newTasksSource.splice(destination.index, 0, tmp);
    }

    const newColumnSource = { ...columnSource, tasks: newTasksSource };
    console.log(newColumnSource);

    // // DESTINATION
    const columnDestination = boardData.columns.find((col: ColumnI) => col.id.toString() === destination.droppableId);

    const newTasksDestination = Array.from(columnDestination.tasks);
    const newColumnDestination = { ...columnDestination, tasks: newTasksDestination };

    if (!sameColumn) {
      newTasksDestination.splice(destination.index, 0, tmp);
    }

    const noChangeColumns = boardData.columns.filter(
      (col: ColumnI) => col.id !== newColumnSource.id && col.id !== newColumnDestination.id
    );

    const newColumn = [...noChangeColumns, newColumnSource, newColumnDestination];
    console.log(newColumn.sort((a, b) => a.id - b.id));

    setBoardData({ ...board, columns: newColumn });
  };

  return (
    <section className="flex flex-row justify-around w-full mt-10">
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        {boardData.columns.map((col: ColumnI) => (
          <Column column={col} key={col.id} />
        ))}
      </DragDropContext>
    </section>
  );
}
