import type { PropsWithChildren } from 'react';
import styles from './styles.module.css';

export default function SubHeading({ children }: PropsWithChildren) {
  return <h2 className={styles.subHeading}>{children}</h2>;
}
