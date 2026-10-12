import { clsx } from '@/utils/clsx';
import { useMemo, type CSSProperties } from 'react';
import styles from './styles.module.css';
import type { Gap, WrapperProps } from './types';

export default function Wrapper({
  children,
  direction,
  justifyContent,
  alignItems,
  gap,
  width,
  className,
  paddingX,
  paddingY,
  padding = 'md',
  as: Tag = 'div',
}: WrapperProps) {
  const maxWidth = useMemo(() => {
    if (width === 'full') return '100%';
    if (width.endsWith('ch')) return width;
    return `var(--media-${width})`;
  }, [width]);

  const defaultGap: Gap = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xxl: 'xxl',
    xxxl: 'xxxl',
  };
  const finalGap: Gap =
    typeof gap === 'string'
      ? { xs: gap, sm: gap, md: gap, lg: gap, xl: gap, xxl: gap, xxxl: gap }
      : { ...defaultGap, ...gap };

  return (
    <Tag
      className={clsx(
        styles.wrapper,
        className,
        Boolean(direction) && styles.flex,
        direction === 'row' && styles.row,
        direction === 'column' && styles.column
      )}
      style={
        {
          '--max-width': maxWidth,
          '--padding-x': `var(--spacing-${paddingX || padding})`,
          '--padding-y': `var(--spacing-${paddingY || padding})`,
          '--justify-content': justifyContent || 'start',
          '--align-items': alignItems || 'stretch',
          '--grid-gap-xs': `var(--spacing-${finalGap.xs})`,
          '--grid-gap-sm': `var(--spacing-${finalGap.sm})`,
          '--grid-gap-md': `var(--spacing-${finalGap.md})`,
          '--grid-gap-lg': `var(--spacing-${finalGap.lg})`,
          '--grid-gap-xl': `var(--spacing-${finalGap.xl})`,
          '--grid-gap-xxl': `var(--spacing-${finalGap.xxl})`,
          '--grid-gap-xxxl': `var(--spacing-${finalGap.xxxl})`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
