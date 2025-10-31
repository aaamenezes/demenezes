import type { ReactNode } from 'react';
import styles from './styles.module.css';

export default function SubSubHeading({ children }: { children: ReactNode }) {
  return <h3 className={styles.subSubHeading}>{children}</h3>;
}
