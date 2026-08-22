import style from './styles.module.css';
import type { PageProps } from './types';

export default function Page({ children }: PageProps) {
  return <div className={style.page}>{children}</div>;
}
