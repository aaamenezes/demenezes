import styles from '../styles.module.css';
import type { HandleListItemProps } from './types';

export default function HandleListItem({ children }: HandleListItemProps) {
  return <li className={styles.li}>{children}</li>;
}
