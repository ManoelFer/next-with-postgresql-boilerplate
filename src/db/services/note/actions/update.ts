'use server';

import { redirect } from 'next/navigation';

import { pool } from '@/db/client';

export async function updateNote(data: FormData) {
  const id = data.get('id')?.valueOf();
  const note = data.get('note')?.valueOf();
  const date = data.get('date')?.valueOf();

  try {
    await pool.query('UPDATE notes SET note = $1, date = $2 WHERE id = $3 RETURNING *', [note, date, id]);
  } catch (error) {
    console.error('error to update note =>', error);
  } finally {
    redirect('/');
  }
}
