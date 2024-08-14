'use server';

import { createNote } from '@/db/services/note/mutations';
import { revalidatePath } from 'next/cache';

export async function createAction(data: FormData) {
  const note = data.get('note')?.valueOf() as string;
  const date = data.get('date')?.valueOf() as string;

  try {
    await createNote({ note, date });

    revalidatePath('/notes');
  } catch (error) {
    console.error('Error to create note', error);
  }
}
