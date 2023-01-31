"use client";
import CreateTask from "./CreateTask";
import { useState } from "react";

export default function AddTask({ column, boardData }) {
  const [active, setActive] = useState(false);
  return (
    <>
      <button
        onClick={() => setActive(true)}
        className="text-xl py-2 w-5/6 my-3 border-dashed text-slate-500 border-slate-500 border-2 rounded-xl "
      >
        <span className="mr-4 ">Add task</span>
        <i className="fa-regular fa-square-plus"></i>
      </button>
      {active && <CreateTask setActive={setActive} column={column} boardData={boardData} />}
    </>
  );
}
