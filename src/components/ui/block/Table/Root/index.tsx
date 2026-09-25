import styles from './styles.module.css';
import type { TableProps } from './types';

function Root({ caption, summary, children }: TableProps) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table} summary={summary}>
        <caption className={styles.tableCaption}>{caption}</caption>
        {children}
      </table>
    </div>
  );
}

Root.displayName = 'Table';

export default Root;
