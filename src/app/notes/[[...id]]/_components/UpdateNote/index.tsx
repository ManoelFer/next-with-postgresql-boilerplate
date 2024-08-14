import { findNote } from '@/db/services/note/queries';

import { NotesTable } from '../NotesTable';
import { NotesForm } from '../NotesForm';

import { updateAction } from './actions';

export async function UpdateNote({ id }: { id: string }) {
  const note = await findNote(id);

  return (
    <main className="m-10">
      <div className="m-5">
        <h1 className="m-5 text-center">Edit note</h1>
        <NotesForm action={updateAction} data={note} />
      </div>

      <NotesTable />
    </main>
  );
}
