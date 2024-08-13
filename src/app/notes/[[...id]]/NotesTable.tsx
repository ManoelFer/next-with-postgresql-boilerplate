import Link from 'next/link';

import { fetchNotes } from '@/db/services/note/queries';
import { deleteNote } from '@/db/services/note/actions';

import { Form } from '@/components';

export async function NotesTable() {
  const notes = await fetchNotes();

  return (
    <>
      {notes.map((element) => (
        <ul className="my-2 flex" key={element.id}>
          <li className="w-[50%] text-center">{element.note}</li>
          <li className="w-[30%] text-center">{element.date}</li>
          <li className="w-[20%] text-center">
            <Link href={'/notes/' + element.id}>
              <button className="bg-cyan-600 p-2 font-bold text-white">Edit</button>
            </Link>
            <Form.ActionButton
              label="Delete"
              action={deleteNote}
              actionKey="id"
              actionValue={element.id}
              className="bg-red-600 p-2 font-bold text-white"
            />
          </li>
        </ul>
      ))}
    </>
  );
}
