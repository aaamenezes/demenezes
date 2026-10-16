import type { GapProps } from '@/types/ui';
import type { TypeOrTypeByBreakpoint } from '@/types/utils';
import type { ReactNode } from 'react';

export interface GridProps {
  children: ReactNode;
  className?: string;
  columns?: TypeOrTypeByBreakpoint<number>;
  gap?: GapProps;
  minColumnWidth?: number;
  as?: keyof HTMLElementTagNameMap;
}
