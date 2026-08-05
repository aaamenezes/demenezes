import type { Spacing } from '@/types';
import { clsx } from '@/utils/clsx';
import { type CSSProperties, type ReactNode } from 'react';
import style from './styles.module.css';
import type { WrapperMaxWidth } from './types';

export default function Wrapper({
  children,
  width,
  padding = 'md',
  paddingX,
  paddingY,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode;
  width: WrapperMaxWidth;
  padding?: Spacing;
  paddingX?: Spacing;
  paddingY?: Spacing;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
}) {
  return (
    <Tag
      className={clsx(style.wrapper, className)}
      style={
        {
          '--max-width': width === 'full' ? '100%' : `var(--media-${width})`,
          '--padding-x': `var(--spacing-${paddingX || padding})`,
          '--padding-y': `var(--spacing-${paddingY || padding})`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
