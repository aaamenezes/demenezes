import StructuredTextDatoCMS from '@/components/ui/container/StructuredTextDatoCMS';
import fontStyle from '@/../styles/font-style.module.css';
import type { ReactNode } from 'react';

export default function BlockQuote({
  source,
  children,
  author,
  isDatoCMS,
}: {
  children: ReactNode;
  source?: string;
  author?: string;
  isDatoCMS?: boolean;
}) {
  return (
    <blockquote cite={source || ''}>
      {isDatoCMS ? <StructuredTextDatoCMS data={children} /> : children}
      {author && (
        <footer className={fontStyle.postQuoteAuthor}>{author}</footer>
      )}
    </blockquote>
  );
}
