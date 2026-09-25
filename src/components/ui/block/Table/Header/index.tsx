import Cell from '../Cell';
import styles from './styles.module.css';
import type { HeaderProps } from './types';

function Header({ cells }: HeaderProps) {
  return (
    <thead className={styles.tableHeader}>
      <tr className={styles.tableRow}>
        {cells.map(cell => (
          <Cell key={cell.label} as="th">
            {cell.label}
          </Cell>
        ))}
      </tr>
    </thead>
  );
}

Header.displayName = 'Table.Header';

export default Header;
