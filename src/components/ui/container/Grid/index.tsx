import { clsx } from '@/utils/clsx';
import type { CSSProperties } from 'react';
import styles from './styles.module.css';
import type { Columns, Gap, GridProps } from './types';

export default function Grid({
  children,
  className,
  columns,
  gap,
  minColumnWidth = 10,
  as: Tag = 'div',
}: GridProps) {
  const defaultColumns: Columns = {
    xs: 1,
    sm: 1,
    md: 1,
    lg: 2,
    xl: 3,
    xxl: 4,
    xxxl: 5,
  };
  const finalColumns: Columns = { ...defaultColumns, ...columns };

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
      className={clsx(styles.grid, className)}
      style={
        {
          '--grid-template-columns-xs': `repeat(${finalColumns.xs}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-template-columns-sm': `repeat(${finalColumns.sm}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-template-columns-md': `repeat(${finalColumns.md}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-template-columns-lg': `repeat(${finalColumns.lg}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-template-columns-xl': `repeat(${finalColumns.xl}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-template-columns-xxl': `repeat(${finalColumns.xxl}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-template-columns-xxxl': `repeat(${finalColumns.xxxl}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
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
