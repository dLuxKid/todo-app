"use server";

import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
import { generateRandomId } from "@/utils";

export const getData = async () => {
  const data = await db.select().from(todo);
  return data;
};

export const addTodo = async (data: FormData) => {
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid parameter, title is compulsory");
  }
  await db.insert(todo).values({
    id: generateRandomId(),
    title: title,
  });

  revalidatePath("/");
};

export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));

  revalidatePath("/");
};

export const toggleTodo = async (id: number) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};

export const editTodo = async (id: number, title: string) => {
  await db
    .update(todo)
    .set({
      title: title,
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};
