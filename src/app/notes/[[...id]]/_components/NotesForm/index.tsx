'use client';

import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

import { Form } from '@/components';
import { INote, INoteFieldErros } from '@/types/notes';

export function NotesForm({
  action,
  data,
}: {
  action: (data: INoteFieldErros, formData: FormData) => Promise<INoteFieldErros>;
  data?: INote;
}) {
  const ref = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState(action, { success: false });

  //  TODO: RESET FORM WHEN REQUEST IS SUCCESSFUL
  useEffect(() => {
    if (state.success) {
      ref.current?.reset();
    }
  }, [state.success]);

  return (
    <Form.Root ref={ref} action={formAction} className="space-y-5">
      {/* TODO: STRATEGY TO GET THE ID THROUGH ACTION */}
      <input type="hidden" name={'id'} value={data?.id} />

      <Form.Input
        type="text"
        errorMessage={state.errors?.note}
        name="note"
        id="note"
        placeholder="Add note"
        defaultValue={data?.note}
      />

      <Form.Input type="date" name="date" id="date" defaultValue={data?.date} placeholder="Add date" />

      <Form.SubmitButton className="p3 rounded-md bg-orange-500 font-bold text-white hover:bg-red-600" />
    </Form.Root>
  );
}
