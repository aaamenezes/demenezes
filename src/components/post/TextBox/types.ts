import type { DatoBlock } from '@/types';
import type { StructuredTextGraphQlResponse } from 'react-datocms';

export interface TextBoxProps {
  content: StructuredTextGraphQlResponse<DatoBlock>;
}
