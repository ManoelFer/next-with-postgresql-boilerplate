import { Form } from '@/components';
import { INote } from '@/types/notes';

export function NotesForm({ action, data }: { action: (data: FormData) => Promise<void>; data?: INote }) {
  return (
    <Form.Root action={action} className="space-y-5">
      {/* TODO: =================== just to get id by action ===================*/}
      <input type="hidden" name={'id'} value={data?.id} />
      {/* ========================================== */}

      <Form.Input type="text" name="note" id="note" placeholder="Add note" defaultValue={data?.note} />
      <Form.Input
        type="date"
        name="date"
        id="date"
        defaultValue={data?.date}
        placeholder="Add date"
        className="h-10 w-[100%] rounded-md p-3 shadow-lg shadow-black"
      />

      <Form.SubmitButton className="p3 rounded-md bg-orange-500 font-bold text-white hover:bg-red-600" />
    </Form.Root>
  );
}
