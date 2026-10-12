import type { Breakpoint, Spacing } from '@/types';
import type { ReactNode } from 'react';

export type Columns = Partial<Record<Breakpoint, number>>;
export type Gap = Spacing | Partial<Record<Breakpoint, Spacing>>;

export interface GridProps {
  children: ReactNode;
  className?: string;
  columns?: Columns;
  gap?: Gap;
  minColumnWidth?: number;
  as?: keyof HTMLElementTagNameMap;
}
