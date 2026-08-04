import type { ReactNode } from 'react';
import style from './styles.module.css';

export default function PostCategory({ children }: { children: ReactNode }) {
  return <div className={style.postCategoryText}>{children}</div>;
}
