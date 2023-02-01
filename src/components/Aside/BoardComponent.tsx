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
        onClick={() => setActive(true)}
        className={` mt-5 card w-48 bg-base-100 shadow-xl cursor-pointer ${
          url === `/board/${board.id}` ? "border border-primary" : ""
        } `}
      >
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{board.name}</h2>
          {/* <hr className="border w-full" /> */}
          {board.describe && <p>{board.describe}</p>}
        </div>
        {active && <CreateBoard edit={true} active={active} setActive={setActive} board={board} userId={userId} />}
      </div>
    </Link>
  );
}
