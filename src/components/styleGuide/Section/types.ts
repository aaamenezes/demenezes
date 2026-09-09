import type { ReactNode } from 'react';

export interface SectionProps {
  heading: string;
  children: ReactNode;
  direction?: 'row' | 'column';
  backgroundColor?: string;
  width?: number;
}
