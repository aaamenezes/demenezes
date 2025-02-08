import { PropsWithChildren } from 'react';
import StructuredTextDatoCMS from '../../PostPage/StructuredTextDatoCMS';

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
      {author && <footer>{author}</footer>}
    </blockquote>
  );
}
