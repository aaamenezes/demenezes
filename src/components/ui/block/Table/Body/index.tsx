import Cell from '../Cell';
import styles from './styles.module.css';
import type { BodyProps } from './types';

function Body({ rows }: BodyProps) {
  return (
    <tbody>
      {rows.map(row => {
        const trKey = row.map(cell => cell.label).join(',');

        return (
          <tr key={trKey} className={styles.tableRow}>
            {row.map(cell => (
              <Cell key={cell.label}>{cell.label}</Cell>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}

Body.displayName = 'Table.Body';

export default Body;
