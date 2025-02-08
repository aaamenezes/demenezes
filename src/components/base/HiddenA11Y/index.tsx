import { PropsWithChildren } from 'react';
import S from './styles.module.css';

export default function HiddenA11Y({ children }: PropsWithChildren) {
  return <span className={S.hiddenA11Y}>{children}</span>;
}
