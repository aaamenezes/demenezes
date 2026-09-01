import styles from './styles.module.css';
import type { PostCategoryProps } from './types';

export default function PostCategory({ children }: PostCategoryProps) {
  return <div className={styles.postCategoryText}>{children}</div>;
}
