import { clsx } from '@/utils/clsx';
import { useMemo, type CSSProperties } from 'react';
import style from './styles.module.css';
import type { WrapperProps } from './types';

export default function Wrapper({
  children,
  width,
  padding = 'md',
  paddingX,
  paddingY,
  as: Tag = 'div',
  className,
}: WrapperProps) {
  const maxWidth = useMemo(() => {
    if (width === 'full') return '100%';
    if (width.endsWith('ch')) return width;
    return `var(--media-${width})`;
  }, [width]);

  return (
    <Tag
      className={clsx(style.wrapper, className || '')}
      style={
        {
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
