import { PropsWithChildren } from 'react';
import StructuredTextDatoCMS from '../../container/StructuredTextDatoCMS';
import fontStyle from '../../../../../styles/font-style.module.css';

export default function BlockQuote({
  source,
  children,
  author,
  isDatoCMS,
}: PropsWithChildren<{
  source?: string;
  author?: string;
  isDatoCMS?: boolean;
}>) {
  return (
    <blockquote cite={source || ''}>
      {isDatoCMS ? <StructuredTextDatoCMS data={children} /> : children}
      {author && (
        <footer className={fontStyle.postQuoteAuthor}>{author}</footer>
      )}
    </blockquote>
  );
}
