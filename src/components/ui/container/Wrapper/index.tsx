import type { CSSProperties, PropsWithChildren } from 'react';
import S from './styles.module.css';
import { clsx } from '../../../../utils/clsx';

const breakpoints = {
  xs: 0,
  sm: 425, // No Bootstrap era 576 mas achei mto próximo do MD
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
  xxxl: 2000,
};

type Breakpoint = keyof typeof breakpoints;
type Width = Breakpoint | 'full';

function getWrapperMaxWidth(
  width: Width,
  breakpoint: Breakpoint,
  isFluid: boolean
) {
  if (width && width !== 'full' && isFluid) {
    return `${breakpoints[width]}px`;
  }

  if (width && width !== 'full' && !isFluid) {
    if (breakpoint === 'xs') return '100%';
    if (breakpoint === 'sm') return `${breakpoints.sm}px`;

    return breakpoints[breakpoint] < breakpoints[width]
      ? breakpoints[breakpoint] + 'px'
      : breakpoints[width] + 'px';
  }

  return '100%';
}

function getWrapperPadding(width: Width, breakpoint: Breakpoint) {
  if (!width || width === 'full') return '0';

  const paddingPercent = 0.05;

  return breakpoints[breakpoint] * paddingPercent + 'px';
}

export default function Wrapper({
  width,
  isFluid = false,
  spacing = 0,
  className = '',
  children,
}: PropsWithChildren<{
  width: Width;
  isFluid?: boolean;
  spacing?: number;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
}>) {
  return (
    <div
      className={clsx(S.container, className)}
      style={
        {
          '--margin-bottom': `${spacing}rem`,
          '--max-width-xs': getWrapperMaxWidth(width, 'xs', isFluid),
          '--max-width-sm': getWrapperMaxWidth(width, 'sm', isFluid),
          '--max-width-md': getWrapperMaxWidth(width, 'md', isFluid),
          '--max-width-lg': getWrapperMaxWidth(width, 'lg', isFluid),
          '--max-width-xl': getWrapperMaxWidth(width, 'xl', isFluid),
          '--max-width-xxl': getWrapperMaxWidth(width, 'xxl', isFluid),
          '--max-width-xxxl': getWrapperMaxWidth(width, 'xxxl', isFluid),
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
