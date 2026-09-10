import styles from './styles.module.css';
import type { AuthorProps } from './types';

function Author({ children }: AuthorProps) {
  return <footer className={styles.postQuoteAuthor}>{children}</footer>;
}

Author.displayName = 'BlockQuote.Author';

export default Author;
