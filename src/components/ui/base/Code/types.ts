import type { ReactNode } from 'react';

export interface CodeProps {
  children: ReactNode;
  language: 'html' | 'css' | 'javascript' | 'js' | 'typescript';
}
