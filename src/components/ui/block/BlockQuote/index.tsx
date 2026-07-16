import StructuredTextDatoCMS from '@/components/ui/container/StructuredTextDatoCMS';
import style from './styles.module.css';
import type { ReactNode } from 'react';

export default function BlockQuote({
  children,
  source,
  author,
  isDatoCMS,
}: {
  children: ReactNode;
  source?: string;
  author?: string;
  isDatoCMS?: boolean;
}) {
  return (
    <blockquote className={style.blockQuote} cite={source || ''}>
      {isDatoCMS ? <StructuredTextDatoCMS data={children} /> : children}
      {author && <footer className={style.postQuoteAuthor}>{author}</footer>}
    </blockquote>
  );
}
