import { MutableRefObject } from "react";

export async function changeTheme(inputElement: MutableRefObject<HTMLInputElement>) {
  console.log(inputElement.current.checked);

  const body = inputElement.current.checked ? "wireframe" : "dracula";
  await fetch("/api/theme", {
    method: "POST",
    body: body,
  });
}
