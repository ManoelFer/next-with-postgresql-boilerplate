import { IInputProps } from './types';

export function Input({ ...rest }: IInputProps) {
  return <input className="h-10 w-[100%] rounded-md p-3 shadow-lg shadow-black" {...rest} />;
}
