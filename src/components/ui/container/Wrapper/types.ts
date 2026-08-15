import type { Breakpoint, Spacing } from '@/types';
import type { ReactNode } from 'react';

type BreakpointsNoXs = Exclude<Breakpoint, 'xs'>;
export type WrapperMaxWidth = BreakpointsNoXs | 'full' | `${number}ch`;

export type WrapperProps = {
  children: ReactNode;
  width: WrapperMaxWidth;
  padding?: Spacing;
  paddingX?: Spacing;
  paddingY?: Spacing;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
};
