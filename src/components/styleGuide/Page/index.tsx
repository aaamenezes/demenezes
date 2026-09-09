import styles from './styles.module.css';
import type { PageProps } from './types';

export default function Page({ children }: PageProps) {
  return <div className={styles.page}>{children}</div>;
}
