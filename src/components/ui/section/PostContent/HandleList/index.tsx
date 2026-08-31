import styles from '../styles.module.css';
import type { HandleListProps } from './types';

export default function HandleList({ children }: HandleListProps) {
  return <ul className={styles.ul}>{children}</ul>;
}
