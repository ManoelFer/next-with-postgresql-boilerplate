'use server';

import { revalidatePath } from 'next/cache';

import { pool } from '@/db/client';

export async function deleteNote(data: FormData) {
  const id = data.get('id')?.valueOf();

  try {
    await pool.query('DELETE FROM notes WHERE id = $1 RETURNING *', [id]);

    revalidatePath('/notes');
  } catch (error) {
    console.error('error to delete note => ', error);
  }
}
