import type { Breakpoint } from './ui';

export type TypeByBreakpoint<T> = Record<Breakpoint, T>;
export type TypeOrTypeByBreakpoint<T> = T | Partial<TypeByBreakpoint<T>>;
