import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import getBreakpoints from '../../../utils/getBreakpoints';

type Width = keyof typeof theme.breakpoints | 'full';

function getWrapperMaxWidth(width: Width, fluid: boolean) {
  const { breakpoints } = theme;

  if (width && width !== 'full' && fluid) {
    return css`
      max-width: ${breakpoints[width]}px;
    `;
  }

  if (width && width !== 'full' && !fluid) {
    return getBreakpoints({
      xs: css`
        max-width: 100%;
      `,
      sm: css`
        max-width: ${breakpoints.sm}px;
      `,
      md: css`
        max-width: ${breakpoints.md < breakpoints[width]
          ? `${breakpoints.md}px`
          : `${breakpoints[width]}px`};
      `,
      lg: css`
        max-width: ${breakpoints.lg < breakpoints[width]
          ? `${breakpoints.lg}px`
          : `${breakpoints[width]}px`};
      `,
      xl: css`
        max-width: ${breakpoints.xl < breakpoints[width]
          ? `${breakpoints.xl}px`
          : `${breakpoints[width]}px`};
      `,
      xxl: css`
        max-width: ${breakpoints.xxl < breakpoints[width]
          ? `${breakpoints.xxl}px`
          : `${breakpoints[width]}px`};
      `,
      xxxl: css`
        max-width: ${breakpoints.xxxl < breakpoints[width]
          ? `${breakpoints.xxxl}px`
          : `${breakpoints[width]}px`};
      `,
    });
  }

  return css`
    max-width: 100%;
  `;
}

function getPadding(
  breakpoints: typeof theme.breakpoints,
  breakpoint: keyof typeof breakpoints,
  paddingPercent: number
) {
  return css`
    padding-left: ${breakpoints[breakpoint] * paddingPercent}px;
    padding-right: ${breakpoints[breakpoint] * paddingPercent}px;
  `;
}

function getWrapperPadding(width: Width) {
  if (!width || width === 'full') {
    return css`
      padding-left: 0;
      padding-right: 0;
    `;
  }

  const { breakpoints } = theme;
  const paddingPercent = 0.05;

  return getBreakpoints({
    xs: css`
      padding-right: 5%;
      padding-left: 5%;
    `,
    sm: getPadding(breakpoints, 'sm', paddingPercent),
    md: getPadding(breakpoints, 'md', paddingPercent),
    lg: getPadding(breakpoints, 'lg', paddingPercent),
    xl: getPadding(breakpoints, 'xl', paddingPercent),
    xxl: getPadding(breakpoints, 'xxl', paddingPercent),
    xxxl: getPadding(breakpoints, 'xxxl', paddingPercent),
  });
}

const Wrapper = styled.div<{
  width: Width;
  fluid?: boolean;
  spacing?: number;
}>`
  width: 100%;
  ${({ width, fluid = false }) => getWrapperMaxWidth(width, fluid)};
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${({ spacing }) =>
    typeof spacing === 'number' ? `${spacing}rem` : '7rem'};
  padding-right: 5%;
  padding-left: 5%;
  ${({ width }) => getWrapperPadding(width)};
`;

export default Wrapper;
