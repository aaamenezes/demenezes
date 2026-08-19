import type { HTMLAttributes, ReactNode } from 'react';

type FontSize =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type LetterSpacing =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

type LineHeight =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

type FontFamily = 'body' | 'heading' | 'monospace';

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
