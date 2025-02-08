import type { PropsWithChildren } from 'react';
import S from './styles.module.css';

export default function Label({ children }: PropsWithChildren) {
  return <div className={S.label}>{children}</div>;
}
