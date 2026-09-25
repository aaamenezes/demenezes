import type { CellProps } from './types';
import styles from './styles.module.css';

export default function Cell({ children, as: Tag = 'td' }: CellProps) {
  return <Tag className={styles.tableCell}>{children}</Tag>;
}
