import { IRootProps } from './types';

export function Root({ children, ...rest }: IRootProps) {
  return <form {...rest}>{children}</form>;
}
