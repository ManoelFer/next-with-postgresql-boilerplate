'use server';

import { redirect } from 'next/navigation';

import { updateNote } from '@/db/services/note/mutations';

export async function updateAction(data: FormData) {
  const id = data.get('id')?.valueOf() as string;
  const note = data.get('note')?.valueOf() as string;
  const date = data.get('date')?.valueOf() as string;

  try {
    await updateNote({ id, note, date });
  } catch (error) {
    console.error('error to update note =>', error);
  } finally {
    redirect('/');
  }
}
