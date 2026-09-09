import styles from './styles.module.css';
import type { ContentProps } from './types';

export default function Content({ children }: ContentProps) {
  return <main className={styles.content}>{children}</main>;
}
