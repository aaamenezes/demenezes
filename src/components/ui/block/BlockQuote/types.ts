import type { DatoBlock } from '@/types';
import type { ReactNode } from 'react';
import type { StructuredTextGraphQlResponse } from 'react-datocms';

export interface BlockQuoteProps {
  children?: ReactNode;
  source?: string;
  author?: string;
  datoContent?: StructuredTextGraphQlResponse<DatoBlock>;
}
