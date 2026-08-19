import type { TextProps } from './types';
import styles from './styles.module.css';
import { clsx } from '@/utils/clsx';

export default function Text({
  children,
  family = 'body',
  size = 'xs',
  weight = 400,
  letterSpacing = 'xs',
  lineHeight = 'xs',
  as: Tag = 'p',
  className,
  ariaHidden,
}: TextProps) {
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
      aria-hidden={ariaHidden}
    >
      {children}
    </Tag>
  );
}
