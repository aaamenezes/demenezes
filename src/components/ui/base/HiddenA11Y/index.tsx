import type { ReactNode } from 'react';
import style from './styles.module.css';

export default function HiddenA11Y({ children }: { children: ReactNode }) {
  return <span className={style.hiddenA11Y}>{children}</span>;
}
