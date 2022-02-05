import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'

function getContainerMaxWidth(theme, width, fluid) {
  const { breakpoints } = theme

  if (width && width !== 'full' && fluid) {
    return css`max-width: ${ breakpoints[width] }px;`
  }

  if (width && width !== 'full' && !fluid) {
    return getBreakpoints({
      xs: css`max-width: 100%;`,
      sm: css`max-width: ${ breakpoints.sm }px;`,
      md: css`max-width: ${
        breakpoints.md < breakpoints[width]
          ? `${ breakpoints.md }px`
          : `${ breakpoints[width] }px`
      };`,
      lg: css`max-width: ${
        breakpoints.lg < breakpoints[width]
          ? `${ breakpoints.lg }px`
          : `${ breakpoints[width] }px`
      };`,
      xl: css`max-width: ${
        breakpoints.xl < breakpoints[width]
          ? `${ breakpoints.xl }px`
          : `${ breakpoints[width] }px`
      };`,
      xxl: css`max-width: ${
        breakpoints.xxl < breakpoints[width]
          ? `${ breakpoints.xxl }px`
          : `${ breakpoints[width] }px`
      };`,
      xxxl: css`max-width: ${
        breakpoints.xxxl < breakpoints[width]
          ? `${ breakpoints.xxxl }px`
          : `${ breakpoints[width] }px`
      };`
    })
  }

  // if (width === 'full' || !width)
  return css`max-width: 100%;`
}

function getPadding(breakpoints, breakpoint, paddingPercent) {
  return css`
    padding-left: ${ breakpoints[breakpoint] * paddingPercent }px;
    padding-right: ${ breakpoints[breakpoint] * paddingPercent }px;
  `
}

function getContainerPadding(theme, width) {
  if (!width || width === 'full') {
    return css`
      padding-left: 0;
      padding-right: 0;
    `
  }

  const { breakpoints } = theme
  const paddingPercent = 0.05

  return getBreakpoints({
    xs: getPadding(breakpoints, 'xs', paddingPercent),
    sm: getPadding(breakpoints, 'sm', paddingPercent),
    md: getPadding(breakpoints, 'md', paddingPercent),
    lg: getPadding(breakpoints, 'lg', paddingPercent),
    xl: getPadding(breakpoints, 'xl', paddingPercent),
    xxl: getPadding(breakpoints, 'xxl', paddingPercent),
    xxxl: getPadding(breakpoints, 'xxxl', paddingPercent)
  })
}

const Container = styled.div`
  width: 100%;
  ${ ({ theme, width, fluid }) => getContainerMaxWidth(theme, width, fluid) };
  /* max-width */
  margin-right: auto;
  margin-left: auto;
  ${ ({ theme, width }) => getContainerPadding(theme, width) };
  /* padding-right + padding-left */
`

export default Container

/**
 * PROPS
 * width: {string} required*
 * - algum breakpoint
 * - full
 * fluid: {boolean}
 */

/**
 * width === 'full' || !width
 * !fluid || !!fluid
 * ===
 * max-width: 100%;
 * ==
 * HighlightText
 * Exemplo default
 * Se width === 'full' (ou se width não for informado) não precisa fazer nada
 * Pois o container já é iniciado com max-width: 100%;
 */

/**
 * width: 'lg'
 * fluid: true
 * ===
 * max-width: 'lg';
 * ===
 * Header Footer
 */

/**
 * width: 'lg'
 * fluid: false
 * ===
 * XS: max-width: 100%;
 * SM: max-width: 'sm';
 * MD: max-width: 'md';
 * LG: max-width: 'lg';
 * XL: max-width: 'lg';
 * XXL: max-width: 'lg';
 * XXXL: max-width: 'lg';
 * ===
 * PostContent
 */
