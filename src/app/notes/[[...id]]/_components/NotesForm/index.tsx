'use client';

import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

import { Form } from '@/components';
import { INote } from '@/types/notes';
import { TNoteFieldErrors } from '@/validator-schemas/notes';

export function NotesForm({
  action,
  data,
}: {
  action: (data: TNoteFieldErrors, formData: FormData) => Promise<TNoteFieldErrors>;
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

      <Form.SubmitButton />
    </Form.Root>
  );
}
