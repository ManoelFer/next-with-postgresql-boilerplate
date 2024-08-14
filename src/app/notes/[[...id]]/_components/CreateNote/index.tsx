import { NotesForm } from '../NotesForm';
import { NotesTable } from '../NotesTable';

import { createAction } from './actions';

export function CreateNote() {
  return (
    <main className="m-10">
      <div className="m-5">
        <h1 className="m-5 text-center">Add note</h1>
        <NotesForm action={createAction} />
      </div>

      <NotesTable />
    </main>
  );
}
