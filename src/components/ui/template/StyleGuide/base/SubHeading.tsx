import type { ReactNode } from 'react';
import styles from './styles.module.css';

export default function SubHeading({ children }: { children: ReactNode }) {
  return <h2 className={styles.subHeading}>{children}</h2>;
}
