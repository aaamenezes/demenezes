import type { Breakpoint, Spacing } from '@/types';
import type { ReactNode } from 'react';

export interface GridProps {
  children: ReactNode;
  className?: string;
  columns?: Partial<Record<Breakpoint, number>>;
  gap?: Spacing;
  minColumnWidth?: number;
}
