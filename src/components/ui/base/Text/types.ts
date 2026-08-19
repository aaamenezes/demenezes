import type {
  FontFamily,
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
} from '@/types';
import type { HTMLAttributes, ReactNode } from 'react';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  family?: FontFamily;
  size?: FontSize;
  weight?: FontWeight;
  letterSpacing?: LetterSpacing;
  lineHeight?: LineHeight;
  as?: 'p' | 'span' | 'strong';
  className?: string;
  ariaHidden?: boolean;
}
