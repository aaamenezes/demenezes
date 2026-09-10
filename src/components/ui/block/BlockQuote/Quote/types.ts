import type { DatoBlock } from '@/types';
import type { ReactNode } from 'react';
import type { StructuredTextGraphQlResponse } from 'react-datocms';

export interface QuoteProps {
  children?: ReactNode;
  datoContent?: StructuredTextGraphQlResponse<DatoBlock>;
}
