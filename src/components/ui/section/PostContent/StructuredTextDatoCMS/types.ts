import type { DatoBlock } from '@/types';
import type { StructuredTextGraphQlResponse } from 'react-datocms';

export interface StructuredTextDatoCMSProps {
  data: StructuredTextGraphQlResponse<DatoBlock>;
}
