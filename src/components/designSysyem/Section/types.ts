import type { ReactNode } from 'react';

export interface SectionProps {
  heading: string;
  children: ReactNode;
  direction?: 'row' | 'column';
  width?: number;
  backgroundColor?: string;
}
