import type { Breakpoint } from '@/types';

type BreakpointsNoXs = Exclude<Breakpoint, 'xs'>;
export type WrapperMaxWidth = BreakpointsNoXs | 'full';
