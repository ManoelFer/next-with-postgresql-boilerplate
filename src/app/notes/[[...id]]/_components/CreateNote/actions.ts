'use server';

import { revalidatePath } from 'next/cache';

import { createNote } from '@/db/services/note/mutations';
import { INoteFieldErros } from '@/types/notes';
import { noteSchema } from '@/validator-schemas/notes';

export async function createAction(_data: INoteFieldErros, formData: FormData): Promise<INoteFieldErros> {
  const resultValidation = noteSchema.safeParse({
    note: formData.get('note'),
    date: formData.get('date'),
  });

  if (!resultValidation.success) return { success: false, errors: resultValidation.error.flatten().fieldErrors };

  try {
    await createNote(resultValidation.data);

    revalidatePath('/notes');

    return { success: true };
  } catch (error) {
    console.error('faild to create note', error);
    return { success: false };
  }
}
