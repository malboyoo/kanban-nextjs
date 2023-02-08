"use client";

import { useRouter } from "next/navigation";
import { addBoard, updateBoard } from "utils/requests";

export default function CreateBoard({ active, setActive, edit = false, board = null, userId }) {
  const router = useRouter();
  async function handleSubmit(value: string) {
    const newBoard = {
      id: board ? board.id : null,
      authorId: userId,
      name: value,
      columns: board ? board.columns : null,
    };
    if (edit) {
      await updateBoard(newBoard);
    } else {
      await addBoard(newBoard);
    }
    router.refresh();
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-[100vh] opacity-50 bg-black backdrop-blur-3xl blur-lg b z-10"
        onClick={() => {
          setActive(false);
          console.log(active);
        }}
      ></div>
      <div className="fixed sm:top-1/4 sm:left-[50%]  h-[300px] w-[400px] translate-x-[-50%] bg-base-200 rounded-2xl z-20">
        <form
          className="w-full h-full py-4 px-10 flex flex-col justify-start items-center"
          onSubmit={(event: any) => {
            event.preventDefault();
            handleSubmit(event.target.content.value);
            setActive(false);
          }}
        >
          <label htmlFor="content" className="text-2xl my-3 text-center ">
            Board name
          </label>
          <input
            name="content"
            defaultValue={edit ? board.name : ""}
            className="rounded-2xl overflow-hidden p-4 resize-none text-lg w-full my-5"
          ></input>
          <div className="flex justify-center gap-10 my-5">
            <button
              className="btn btn-outline btn-error"
              onClick={(event) => {
                event.preventDefault();
                setActive(false);
              }}
            >
              cancel
            </button>
            <button className="btn btn-outline btn-success" type="submit">
              {edit ? "Edit" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
