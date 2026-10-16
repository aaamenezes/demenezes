import { clsx } from '@/utils/clsx';
import { fillValuesByBreakpoint } from '@/utils/fillValuesByBreapoint';
import { useMemo, type CSSProperties } from 'react';
import styles from './styles.module.css';
import type { WrapperProps } from './types';

export default function Wrapper({
  children,
  direction,
  justifyContent,
  alignItems,
  gap,
  paddingX,
  paddingY,
  width = 'full',
  padding = 'md',
  as: Tag = 'div',
  className,
}: WrapperProps) {
  const directionValuesByBreakpoint = fillValuesByBreakpoint(
    {
      xs: 'column',
      sm: 'column',
      md: 'column',
      lg: 'column',
      xl: 'column',
      xxl: 'column',
      xxxl: 'column',
    },
    direction
  );

  const justifyContentValuesByBreakpoint = fillValuesByBreakpoint(
    {
      xs: 'start',
      sm: 'start',
      md: 'start',
      lg: 'start',
      xl: 'start',
      xxl: 'start',
      xxxl: 'start',
    },
    justifyContent
  );

  const alignItemsValuesByBreakpoint = fillValuesByBreakpoint(
    {
      xs: 'start',
      sm: 'start',
      md: 'start',
      lg: 'start',
      xl: 'start',
      xxl: 'start',
      xxxl: 'start',
    },
    alignItems
  );

  const maxWidth = useMemo(() => {
    if (width === 'full') return '100%';
    if (width.endsWith('ch')) return width;
    return `var(--media-${width})`;
  }, [width]);

  const gapValuesByBreakpoint = fillValuesByBreakpoint(
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
      className={clsx(
        styles.wrapper,
        className,
        Boolean(direction) && styles.flex
      )}
      style={
        {
          '--flex-direction-xs': directionValuesByBreakpoint.xs,
          '--flex-direction-sm': directionValuesByBreakpoint.sm,
          '--flex-direction-md': directionValuesByBreakpoint.md,
          '--flex-direction-lg': directionValuesByBreakpoint.lg,
          '--flex-direction-xl': directionValuesByBreakpoint.xl,
          '--flex-direction-xxl': directionValuesByBreakpoint.xxl,
          '--flex-direction-xxxl': directionValuesByBreakpoint.xxxl,
          '--justify-content-xs': justifyContentValuesByBreakpoint.xs,
          '--justify-content-sm': justifyContentValuesByBreakpoint.sm,
          '--justify-content-md': justifyContentValuesByBreakpoint.md,
          '--justify-content-lg': justifyContentValuesByBreakpoint.lg,
          '--justify-content-xl': justifyContentValuesByBreakpoint.xl,
          '--justify-content-xxl': justifyContentValuesByBreakpoint.xxl,
          '--justify-content-xxxl': justifyContentValuesByBreakpoint.xxxl,
          '--align-items-xs': alignItemsValuesByBreakpoint.xs,
          '--align-items-sm': alignItemsValuesByBreakpoint.sm,
          '--align-items-md': alignItemsValuesByBreakpoint.md,
          '--align-items-lg': alignItemsValuesByBreakpoint.lg,
          '--align-items-xl': alignItemsValuesByBreakpoint.xl,
          '--align-items-xxl': alignItemsValuesByBreakpoint.xxl,
          '--align-items-xxxl': alignItemsValuesByBreakpoint.xxxl,
          '--grid-gap-xs': `var(--spacing-${gapValuesByBreakpoint.xs})`,
          '--grid-gap-sm': `var(--spacing-${gapValuesByBreakpoint.sm})`,
          '--grid-gap-md': `var(--spacing-${gapValuesByBreakpoint.md})`,
          '--grid-gap-lg': `var(--spacing-${gapValuesByBreakpoint.lg})`,
          '--grid-gap-xl': `var(--spacing-${gapValuesByBreakpoint.xl})`,
          '--grid-gap-xxl': `var(--spacing-${gapValuesByBreakpoint.xxl})`,
          '--grid-gap-xxxl': `var(--spacing-${gapValuesByBreakpoint.xxxl})`,
          '--max-width': maxWidth,
          '--padding-x': `var(--spacing-${paddingX || padding})`,
          '--padding-y': `var(--spacing-${paddingY || padding})`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
