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
  as?: 'p' | 'span' | 'strong';
  className?: string;
  ariaHidden?: boolean;
  inheritTypographyStyles?: boolean;
  family?: FontFamily;
  size?: FontSize;
  weight?: FontWeight;
  letterSpacing?: LetterSpacing;
  lineHeight?: LineHeight;
};
