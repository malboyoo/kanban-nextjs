"use client";
import { resetServerContext } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import Column from "./Column";
import { Column as ColumnI, Task } from "@prisma/client";
import { updateTask } from "utils/requests";
import TrashCan from "./TrashCan";
import { deleteTask } from "utils/requests";

export default function DragArea({ board }) {
  const [boardData, setBoardData] = useState(board);
  resetServerContext();

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

    const tmpTask: Task = newTasksSource.find((task: Task) => task.id.toString() === draggableId);

    newTasksSource.splice(source.index, 1);
    if (sameColumn) {
      newTasksSource.splice(destination.index, 0, tmpTask);
    }

    const newColumnSource = { ...columnSource, tasks: newTasksSource };

    let newColumnDestination = null;

    // // DESTINATION
    if (destination.droppableId !== "trash") {
      const columnDestination = boardData.columns.find((col: ColumnI) => col.id.toString() === destination.droppableId);

      const newTasksDestination = Array.from(columnDestination.tasks);
      newColumnDestination = { ...columnDestination, tasks: newTasksDestination };
      if (!sameColumn) {
        tmpTask.columnId = newColumnDestination.id;
        newTasksDestination.splice(destination.index, 0, tmpTask);
      }
    }

    const noChangeColumns = boardData.columns.filter((col: ColumnI) => {
      if (newColumnDestination) {
        if (col.id !== newColumnSource.id && col.id !== newColumnDestination.id) {
          return col;
        }
      } else {
        if (col.id !== newColumnSource.id) {
          return col;
        }
      }
    });

    const newColumn =
      sameColumn || newColumnDestination === null
        ? [...noChangeColumns, newColumnSource]
        : [...noChangeColumns, newColumnSource, newColumnDestination];

    console.log(newColumn);

    newColumn.sort((a, b) => a.id - b.id);

    setBoardData({ ...board, columns: newColumn });

    //TRASH ?
    if (destination.droppableId === "trash") {
      console.log("in trash");

      deleteTask(tmpTask);
      return;
    }
    updateTask(tmpTask);
  };

  return (
    <section className="flex flex-row justify-around w-full mt-10 relative">
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        {boardData.columns.map((col: ColumnI) => (
          <Column column={col} key={col.id} boardData={[boardData, setBoardData]} />
        ))}
        <TrashCan />
      </DragDropContext>
    </section>
  );
}
