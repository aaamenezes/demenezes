import type { Link as LinkNode } from 'datocms-structured-text-utils';
import type { ReactNode } from 'react';

export interface HandleLinkProps {
  node: LinkNode;
  children: ReactNode;
}
