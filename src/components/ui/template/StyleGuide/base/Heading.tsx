import type { ReactNode } from 'react';
import styles from './styles.module.css';

export default function Heading({ children }: { children: ReactNode }) {
  return <h1 className={styles.heading}>{children}</h1>;
}
