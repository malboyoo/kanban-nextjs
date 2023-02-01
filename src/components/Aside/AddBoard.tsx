"use client";

import { useState } from "react";
import CreateBoard from "./CreateBoard";

export default function AddBoard({ userId }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(true)}
      className="mt-10 text-xl card w-48 bg-base-100 border-dashed text-slate-500 border-slate-500 border-2 rounded-xl cursor-pointer bg-transparent"
    >
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">Add Board</h2>
      </div>
      {active && <CreateBoard active={active} setActive={setActive} userId={userId} />}
    </div>
  );
}
