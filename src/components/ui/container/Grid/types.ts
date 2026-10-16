import type { GapProps } from '@/types/ui';
import type { TypeByBreakpoint } from '@/types/utils';
import type { ReactNode } from 'react';

export interface GridProps {
  children: ReactNode;
  className?: string;
  columns?: TypeByBreakpoint<number>;
  gap?: GapProps;
  minColumnWidth?: number;
  as?: keyof HTMLElementTagNameMap;
}
