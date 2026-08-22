import style from './styles.module.css';
import type { ContentProps } from './types';

export default function Content({ children }: ContentProps) {
  return <main className={style.content}>{children}</main>;
}
