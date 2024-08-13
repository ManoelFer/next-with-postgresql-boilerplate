import { createNote } from '@/db/services/note/actions';

import { NotesTable } from './NotesTable';

import { NotesForm } from './NotesForm';

export async function CreateNote() {
  return (
    <main className="m-10">
      <div className="m-5">
        <h1 className="m-5 text-center">Add note</h1>
        <NotesForm action={createNote} />
      </div>

      <NotesTable />
    </main>
  );
}
