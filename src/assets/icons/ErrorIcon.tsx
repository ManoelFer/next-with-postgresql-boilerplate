import * as React from 'react';

import { ISVGProps } from '@/types/svg';

export const ErrorIcon = ({ size, height, width, ...props }: ISVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      height={size || height || 20}
      width={size || width || 20}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
