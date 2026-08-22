import StructuredTextDatoCMS from '@/components/ui/section/PostContent/StructuredTextDatoCMS';
import style from './styles.module.css';
import type { BlockQuoteProps } from './types';

export default function BlockQuote({
  children,
  source,
  author,
  datoContent,
}: BlockQuoteProps) {
  return (
    <blockquote className={style.blockQuote} cite={source || ''}>
      {datoContent ? <StructuredTextDatoCMS data={datoContent} /> : children}
      {author && <footer className={style.postQuoteAuthor}>{author}</footer>}
    </blockquote>
  );
}
