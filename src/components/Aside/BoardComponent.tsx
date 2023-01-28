"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BoardComponent({ board }) {
  const url = usePathname();

  return (
    <Link href={`/board/${board.id}`}>
      <div
        className={` mt-5 card w-48 bg-base-100 shadow-xl cursor-pointer ${
          url === `/board/${board.id}` ? "border border-primary" : ""
        } `}
      >
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{board.name}</h2>
          <hr className="border w-full" />
          {board.describe && <p>{board.describe}</p>}
        </div>
      </div>
    </Link>
  );
}
