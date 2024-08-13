'use client';

import { useFormStatus } from 'react-dom';

import { ISubmitButtonProps } from './types';

export function SubmitButton({ label = 'Submit', ...rest }: ISubmitButtonProps) {
  //TODO: RETURNS THE STATE OF THE <form>... parent element.
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} {...rest}>
      {label}
    </button>
  );
}
