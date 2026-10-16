import type { Breakpoint, GapProps, Spacing } from '@/types/ui';
import type { TypeOrTypeByBreakpoint } from '@/types/utils';
import type { ReactNode } from 'react';

export type WrapperProps = {
  children: ReactNode;
  direction?: TypeOrTypeByBreakpoint<'row' | 'column'>;
  justifyContent?: TypeOrTypeByBreakpoint<
    'start' | 'center' | 'end' | 'space-between'
  >;
  alignItems?: TypeOrTypeByBreakpoint<'stretch' | 'start' | 'center' | 'end'>;
  gap?: GapProps;
  width?: Exclude<Breakpoint, 'xs'> | 'full' | `${number}ch`;
  paddingX?: Spacing;
  paddingY?: Spacing;
  padding?: Spacing;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
};
