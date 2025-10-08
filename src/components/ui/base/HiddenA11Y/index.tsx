import { PropsWithChildren } from 'react';
import style from './styles.module.css';

export default function HiddenA11Y({ children }: PropsWithChildren) {
  return <span className={style.hiddenA11Y}>{children}</span>;
}
