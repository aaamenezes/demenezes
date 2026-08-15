import StructuredTextDatoCMS from '@/components/ui/section/PostContent/StructuredTextDatoCMS';
import type { DatoBlock } from '@/types';
import type { ReactNode } from 'react';
import type { StructuredTextGraphQlResponse } from 'react-datocms';
import style from './styles.module.css';

export default function BlockQuote({
  children,
  source,
  author,
  datoContent,
}: {
  children?: ReactNode;
  source?: string;
  author?: string;
  datoContent?: StructuredTextGraphQlResponse<DatoBlock>;
}) {
  return (
    <blockquote className={style.blockQuote} cite={source || ''}>
      {datoContent ? <StructuredTextDatoCMS data={datoContent} /> : children}
      {author && <footer className={style.postQuoteAuthor}>{author}</footer>}
    </blockquote>
  );
}
