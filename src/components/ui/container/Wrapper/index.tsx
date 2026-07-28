import { clsx } from '@/utils/clsx';
import type { ReactNode } from 'react';
import { useCallback, type CSSProperties } from 'react';
import style from './styles.module.css';

const breakpoints = {
  xs: 0,
  sm: 425,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
  xxxl: 2000,
};

type Breakpoint = keyof typeof breakpoints;
type Width = Breakpoint | 'full';

export default function Wrapper({
  children,
  width,
  className = '',
}: {
  children: ReactNode;
  width: Width;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
}) {
  const getWrapperMaxWidth = useCallback(
    (width: Width, breakpoint: Breakpoint) => {
      if (width && width !== 'full') {
        return `${breakpoints[width]}px`;
      }

      if (width && width !== 'full') {
        if (breakpoint === 'xs') return '100%';
        if (breakpoint === 'sm') return `${breakpoints.sm}px`;

        return breakpoints[breakpoint] < breakpoints[width]
          ? breakpoints[breakpoint] + 'px'
          : breakpoints[width] + 'px';
      }

      return '100%';
    },
    []
  );

  const getWrapperPadding = useCallback(
    (width: Width, breakpoint: Breakpoint) => {
      if (!width || width === 'full') return '0';

      const paddingPercent = 0.05;

      return breakpoints[breakpoint] * paddingPercent + 'px';
    },
    []
  );

  return (
    <div
      className={clsx(style.container, className)}
      style={
        {
          '--max-width-xs': getWrapperMaxWidth(width, 'xs'),
          '--max-width-sm': getWrapperMaxWidth(width, 'sm'),
          '--max-width-md': getWrapperMaxWidth(width, 'md'),
          '--max-width-lg': getWrapperMaxWidth(width, 'lg'),
          '--max-width-xl': getWrapperMaxWidth(width, 'xl'),
          '--max-width-xxl': getWrapperMaxWidth(width, 'xxl'),
          '--max-width-xxxl': getWrapperMaxWidth(width, 'xxxl'),
          '--padding-xs': getWrapperPadding(width, 'xs'),
          '--padding-sm': getWrapperPadding(width, 'sm'),
          '--padding-md': getWrapperPadding(width, 'md'),
          '--padding-lg': getWrapperPadding(width, 'lg'),
          '--padding-xl': getWrapperPadding(width, 'xl'),
          '--padding-xxl': getWrapperPadding(width, 'xxl'),
          '--padding-xxxl': getWrapperPadding(width, 'xxxl'),
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
