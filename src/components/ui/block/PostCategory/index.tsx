import style from './styles.module.css';
import type { PostCategoryProps } from './types';

export default function PostCategory({ children }: PostCategoryProps) {
  return <div className={style.postCategoryText}>{children}</div>;
}
