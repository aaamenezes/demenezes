import { clsx } from '@/utils/clsx';
import type { ReactNode } from 'react';
import { type CSSProperties } from 'react';
import style from './styles.module.css';
import type { WrapperMaxWidth } from './types';

export default function Wrapper({
  children,
  width,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode;
  width: WrapperMaxWidth;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
}) {
  return (
    <Tag
      className={clsx(style.wrapper, className)}
      style={
        {
          '--max-width': width === 'full' ? '100%' : `var(--media-${width})`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
