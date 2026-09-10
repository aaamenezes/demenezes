import styles from './styles.module.css';
import type { BlockQuoteProps } from './types';

function Root({ children, source }: BlockQuoteProps) {
  return (
    <blockquote className={styles.blockQuote} cite={source}>
      {children}
    </blockquote>
  );
}

Root.displayName = 'BlockQuote';

export default Root;
