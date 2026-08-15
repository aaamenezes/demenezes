import type { ReactNode } from 'react';

export interface LinkProps {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
  className?: string;
}
