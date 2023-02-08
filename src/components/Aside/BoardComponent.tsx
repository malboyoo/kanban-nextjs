"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CreateBoard from "./CreateBoard";

export default function BoardComponent({ board, userId }) {
  const url = usePathname();
  const [active, setActive] = useState(false);

  return (
    <Link href={`/board/${board.id}`}>
      <div
        className={` mt-5 card w-48 bg-base-100 shadow-xl cursor-pointer ${
          url === `/board/${board.id}` ? "border border-primary" : ""
        } `}
      >
        <div className="card-body flex flex-col items-center relative">
          <h2 className="card-title text-center">{board.name}</h2>
          <i
            className="fa-solid fa-pen text-xs bg-base-300 rounded-xl p-2 block absolute right-[10px] top-2"
            onClick={() => setActive(true)}
          ></i>
          {board.describe && <p>{board.describe}</p>}
        </div>
        {active && <CreateBoard edit={true} active={active} setActive={setActive} board={board} userId={userId} />}
      </div>
    </Link>
  );
}
