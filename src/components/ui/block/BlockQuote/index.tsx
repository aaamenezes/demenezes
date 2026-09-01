import StructuredTextDatoCMS from '@/components/ui/section/PostContent/StructuredTextDatoCMS';
import styles from './styles.module.css';
import type { BlockQuoteProps } from './types';

export default function BlockQuote({
  children,
  source,
  author,
  datoContent,
}: BlockQuoteProps) {
  return (
    <blockquote className={styles.blockQuote} cite={source}>
      {datoContent ? <StructuredTextDatoCMS data={datoContent} /> : children}
      {author && <footer className={styles.postQuoteAuthor}>{author}</footer>}
    </blockquote>
  );
}
