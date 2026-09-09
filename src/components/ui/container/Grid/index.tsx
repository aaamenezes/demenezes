import { clsx } from '@/utils/clsx';
import type { CSSProperties } from 'react';
import styles from './styles.module.css';
import type { GridProps } from './types';

export default function Grid({
  children,
  className,
  columns,
  gap = 'xxxs',
  minColumnWidth = 10,
}: GridProps) {
  const defaultColumns = { xs: 1, sm: 1, md: 1, lg: 2, xl: 3, xxl: 4, xxxl: 5 };
  const finalColumns = { ...defaultColumns, ...columns };

  return (
    <div
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
          '--grid-gap': `var(--spacing-${gap})`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
