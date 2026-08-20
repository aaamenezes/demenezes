import { clsx } from '@/utils/clsx';
import styles from '@styles/typography.module.css';
import type { HeadingProps } from './types';

export default function Heading({
  children,
  level = 2,
  family = 'heading',
  size = 'xl',
  weight = 700,
  letterSpacing = 'xs',
  lineHeight = 'sm',
  className,
  id,
}: HeadingProps) {
  const Tag = `h${level}` as keyof HTMLElementTagNameMap;

  return (
    <Tag
      className={clsx(
        className || '',
        styles[`font-family-${family}`],
        styles[`font-size-${size}`],
        styles[`font-weight-${weight}`],
        styles[`letter-spacing-${letterSpacing}`],
        styles[`line-height-${lineHeight}`]
      )}
      id={id}
    >
      {children}
    </Tag>
  );
}
