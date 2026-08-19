import type { HTMLAttributes, ReactNode } from 'react';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: 'p' | 'span' | 'strong';
  className?: string;
}
