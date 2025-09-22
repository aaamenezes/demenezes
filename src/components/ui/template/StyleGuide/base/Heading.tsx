import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

export default function Heading({ children }: PropsWithChildren) {
  return <h1 className={styles.heading}>{children}</h1>;
}
