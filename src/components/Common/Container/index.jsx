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

function getContainerPadding(theme, fluid) {
  const { breakpoints } = theme
  const paddingPercent = 0.05

  if (fluid) {
    return css`
      padding-left: 0;
      padding-right: 0;
    `
  }

  return getBreakpoints({
    xs: css`
      padding-left: 5%;
      padding-right: 5%;
    `,
    sm: css`
      padding-left: ${ breakpoints.sm * paddingPercent }px;
      padding-right: ${ breakpoints.sm * paddingPercent }px;
    `,
    md: css`
      padding-left: ${ breakpoints.md * paddingPercent }px;
      padding-right: ${ breakpoints.md * paddingPercent }px;
    `,
    lg: css`
      padding-left: ${ breakpoints.lg * paddingPercent }px;
      padding-right: ${ breakpoints.lg * paddingPercent }px;
    `,
    xl: css`
      padding-left: ${ breakpoints.xl * paddingPercent }px;
      padding-right: ${ breakpoints.xl * paddingPercent }px;
    `,
    xxl: css`
      padding-left: ${ breakpoints.xxl * paddingPercent }px;
      padding-right: ${ breakpoints.xxl * paddingPercent }px;
    `,
    xxxl: css`
      padding-left: ${ breakpoints.xxxl * paddingPercent }px;
      padding-right: ${ breakpoints.xxxl * paddingPercent }px;
    `
  })
}

const Container = styled.div`
  width: 100%;
  ${ ({ theme, width, fluid }) => getContainerMaxWidth(theme, width, fluid) };
  /* max-width */
  margin-right: auto;
  margin-left: auto;
  ${ ({ theme, width, fluid }) => getContainerPadding(theme, fluid) };
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
