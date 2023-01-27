"use client";

import Column from "./Column";

export default function DragArea({ board }) {
  return (
    <section className="flex flex-row justify-around w-full mt-10">
      {board.columns.map((col) => (
        <Column column={col} key={col.id} />
      ))}
    </section>
  );
}
