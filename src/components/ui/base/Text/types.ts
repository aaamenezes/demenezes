import type {
  FontFamily,
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
} from '@/types';
import type { HTMLAttributes, ReactNode } from 'react';

export type TextProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
  ariaHidden?: boolean;
  inheritTypographyStyles?: boolean;
  as?: 'p' | 'span' | 'strong';
  family?: FontFamily;
  size?: FontSize;
  weight?: FontWeight;
  letterSpacing?: LetterSpacing;
  lineHeight?: LineHeight;
};
