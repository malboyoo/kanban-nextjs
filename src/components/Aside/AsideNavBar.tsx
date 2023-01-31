import { Board } from "@prisma/client";
import BoardComponent from "./BoardComponent";
import CreateBoard from "./CreateBoard";

export default function AsideNavBar({ boards }: { boards: Board[] }) {
  return (
    <aside className="bg-base-200 p-5">
      <h1 className="text-2xl mt-1 mb-20 text-center">Kanban</h1>
      {boards.map((board: Board) => (
        <BoardComponent board={board} key={board.id} />
      ))}
      <CreateBoard />
    </aside>
  );
}
