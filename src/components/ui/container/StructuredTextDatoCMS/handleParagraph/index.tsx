import type { ReactNode } from 'react';
import style from './styles.module.css';

export default function HandleParagraph({ children }: { children: ReactNode }) {
  return <p className={style.postBody}>{children}</p>;
}
