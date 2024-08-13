"use server";

import { pool } from "@/db/client";
import { revalidatePath } from "next/cache";

export async function createNote(data: FormData) {
  const note = data.get("note")?.valueOf();
  const date = data.get("date")?.valueOf();
  try {
    await pool.query(
      "INSERT INTO notes (note, date) VALUES ($1, $2) RETURNING *",
      [note, date]
    );

    revalidatePath("/notes");
  } catch (error) {
    console.error("Error to create note", error);
  }
}
