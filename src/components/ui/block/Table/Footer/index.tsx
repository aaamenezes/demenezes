import Cell from '../Cell';
import styles from './styles.module.css';
import type { FooterProps } from './types';

function Footer({ cells }: FooterProps) {
  return (
    <tfoot>
      <tr className={styles.tableRow}>
        {cells.map(cell => (
          <Cell key={cell.label}>{cell.label}</Cell>
        ))}
      </tr>
    </tfoot>
  );
}

Footer.displayName = 'Table.Footer';

export default Footer;
