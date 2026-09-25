import type { Cell } from '../types';

export type Row = Cell[];

export interface BodyProps {
  rows: Row[];
}
