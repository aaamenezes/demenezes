import type { Breakpoint, Spacing } from '@/types';
import type { ReactNode } from 'react';

export type Gap = Spacing | Partial<Record<Breakpoint, Spacing>>;

type BreakpointsNoXs = Exclude<Breakpoint, 'xs'>;
export type WrapperMaxWidth = BreakpointsNoXs | 'full' | `${number}ch`;

export type WrapperProps = {
  children: ReactNode;
  direction?: 'row' | 'column';
  justifyContent?: 'start' | 'center' | 'end';
  alignItems?: 'start' | 'center' | 'end';
  gap?: Gap;
  width: WrapperMaxWidth;
  className?: string;
  paddingX?: Spacing;
  paddingY?: Spacing;
  padding?: Spacing;
  as?: keyof HTMLElementTagNameMap;
};
