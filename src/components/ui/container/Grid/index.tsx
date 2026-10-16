import type { GapByBreakpoint } from '@/types/ui';
import { clsx } from '@/utils/clsx';
import { fillValuesByBreakpoint } from '@/utils/fillValuesByBreapoint';
import type { CSSProperties } from 'react';
import styles from './styles.module.css';
import type { GridProps } from './types';

export default function Grid({
  children,
  className,
  columns,
  gap,
  minColumnWidth = 10,
  as: Tag = 'div',
}: GridProps) {
  const columnsValuesByBreakpoint = fillValuesByBreakpoint(
    {
      xs: 1,
      sm: 1,
      md: 1,
      lg: 2,
      xl: 3,
      xxl: 4,
      xxxl: 5,
    },
    columns
  );

  const gapByBreakpoint: GapByBreakpoint = fillValuesByBreakpoint(
    {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl',
      xxl: 'xxl',
      xxxl: 'xxxl',
    },
    gap
  );

  return (
    <Tag
      className={clsx(styles.grid, className)}
      style={
        {
          '--grid-template-columns-xs': `repeat(${columnsValuesByBreakpoint.xs}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-template-columns-sm': `repeat(${columnsValuesByBreakpoint.sm}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-template-columns-md': `repeat(${columnsValuesByBreakpoint.md}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-template-columns-lg': `repeat(${columnsValuesByBreakpoint.lg}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-template-columns-xl': `repeat(${columnsValuesByBreakpoint.xl}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-template-columns-xxl': `repeat(${columnsValuesByBreakpoint.xxl}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-template-columns-xxxl': `repeat(${columnsValuesByBreakpoint.xxxl}, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
          '--grid-gap-xs': `var(--spacing-${gapByBreakpoint.xs})`,
          '--grid-gap-sm': `var(--spacing-${gapByBreakpoint.sm})`,
          '--grid-gap-md': `var(--spacing-${gapByBreakpoint.md})`,
          '--grid-gap-lg': `var(--spacing-${gapByBreakpoint.lg})`,
          '--grid-gap-xl': `var(--spacing-${gapByBreakpoint.xl})`,
          '--grid-gap-xxl': `var(--spacing-${gapByBreakpoint.xxl})`,
          '--grid-gap-xxxl': `var(--spacing-${gapByBreakpoint.xxxl})`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
