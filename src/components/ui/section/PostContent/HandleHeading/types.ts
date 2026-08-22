import type { Heading as HeadingNode } from 'datocms-structured-text-utils';
import type { ReactNode } from 'react';

export interface HandleHeadingProps {
  node: HeadingNode;
  children: ReactNode;
}
