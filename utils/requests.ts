import { Task, Board } from "@prisma/client";
import { MutableRefObject } from "react";

export async function changeTheme(inputElement: MutableRefObject<HTMLInputElement>) {
  const body = inputElement.current.checked ? "wireframe" : "dracula";
  await fetch("/api/theme", {
    method: "POST",
    body: body,
  });
}

export async function updateTask(task: Partial<Task>) {
  const response = await fetch("/api/task", {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();
  return data;
}

export async function deleteTask(task: Task) {
  await fetch("/api/task", {
    method: "DELETE",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function addTask(task: Partial<Task>) {
  const response = await fetch("/api/task", {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();
  return data;
}

export async function addBoard(board: Partial<Board>) {
  const response = await fetch("/api/board", {
    method: "POST",
    body: JSON.stringify(board),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();
  return data;
}

export async function updateBoard(board: Partial<Board>) {
  const response = await fetch("/api/board", {
    method: "PATCH",
    body: JSON.stringify(name),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();
  return data;
}

export async function deleteBoard(board) {
  await fetch("/api/board", {
    method: "DELETE",
    body: JSON.stringify(board),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
