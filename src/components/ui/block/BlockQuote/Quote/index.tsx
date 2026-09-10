import StructuredTextDatoCMS from '@/components/ui/section/PostContent/StructuredTextDatoCMS';
import type { QuoteProps } from './types';

function Quote({ datoContent, children }: QuoteProps) {
  return datoContent ? (
    <StructuredTextDatoCMS data={datoContent} />
  ) : children ? (
    children
  ) : (
    <></>
  );
}

Quote.displayName = 'BlockQuote.Quote';

export default Quote;
