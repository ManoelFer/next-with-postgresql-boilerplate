import Link from 'next/link';

import { fetchNotes } from '@/db/services/note/queries';

import { Form } from '@/components';

import { deleteAction } from './actions';

export async function NotesTable() {
  const notes = await fetchNotes();

  return (
    <>
      {notes.map(({ id, note, date }) => (
        <ul className="my-2 flex" key={id}>
          <li className="w-[50%] text-center">{note}</li>
          <li className="w-[30%] text-center">{date}</li>
          <li className="w-[20%] text-center">
            <Link href={'/notes/' + id}>
              <button className="bg-cyan-600 p-2 font-bold text-white">Edit</button>
            </Link>
            <Form.ActionButton
              label="Delete"
              action={deleteAction}
              actionKey="id"
              actionValue={id}
              className="bg-red-600 p-2 font-bold text-white"
            />
          </li>
        </ul>
      ))}
    </>
  );
}
