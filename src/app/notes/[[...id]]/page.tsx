import { UpdateNote } from './UpdateNote';
import { CreateNote } from './CreateNote';

export default function Notes({ params }: { params: { id: string[] } }) {
  const { id } = params;

  const isEdit = !!id;

  if (isEdit) return <UpdateNote id={id[0]} />;

  return <CreateNote />;
}
