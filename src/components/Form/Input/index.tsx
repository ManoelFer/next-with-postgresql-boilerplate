import { IInputProps } from './types';

import { Icons } from '@/assets/icons';

export function Input({ errorMessage, ...rest }: IInputProps) {
  const hasError = !!errorMessage?.length;

  return (
    <div className="flex flex-col">
      <input
        className={
          hasError
            ? 'block rounded border border-red-400 bg-red-50 px-3 py-1 text-gray-700 focus:border-red-500 focus:ring-red-500'
            : 'block rounded border border-gray-200 bg-gray-100 px-3 py-1 text-gray-700 focus:border-blue-500 focus:ring-blue-500'
        }
        {...rest}
      />

      {hasError && (
        <div className="mt-1 flex items-center text-red-700">
          <Icons name="error" />
          <p className="ml-1 text-xs">{errorMessage[0]}</p>
        </div>
      )}
    </div>
  );
}
