import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

export default function SubSubHeading({ children }: PropsWithChildren) {
  return <h3 className={styles.subSubHeading}>{children}</h3>;
}
