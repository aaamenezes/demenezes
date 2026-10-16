import type { TypeByBreakpoint, TypeOrTypeByBreakpoint } from './utils';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export type Spacing =
  | 'none'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

export type GapProps = TypeOrTypeByBreakpoint<Spacing>;
export type GapByBreakpoint = TypeByBreakpoint<Spacing>;
