import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'
import { getWidth } from '../../../utils/getWidth'

function getContainerMaxWidth(width, breakpoint) {
  if (width === 'full') return '100%'
  if (width) return getWidth(width)
  return getWidth(breakpoint)
}

function getContainerPadding(breakpoint) {
  return `${ getWidth(breakpoint).replace('px', '') * 0.05 }px`
}

const Container = styled.div`
  ${ getBreakpoints({
    xs: css`
      width: 100%;
      max-width: ${ ({ width }) => getContainerMaxWidth(width, 'sm') };
      padding-right: ${ getContainerPadding('sm') };
      padding-left: ${ getContainerPadding('sm') };
      margin-top: 0;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: max(${ getGutter(20) }, min(8vw, ${ getGutter(40) }));
    `,
    sm: css`
      max-width: ${ ({ width }) => getContainerMaxWidth(width, 'md') };
      padding-right: ${ getContainerPadding('md') };
      padding-left: ${ getContainerPadding('md') };
    `,
    md: css`
      max-width: ${ ({ width }) => getContainerMaxWidth(width, 'lg') };
      padding-right: ${ getContainerPadding('lg') };
      padding-left: ${ getContainerPadding('lg') };
    `,
    lg: css`
      max-width: ${ ({ width }) => getContainerMaxWidth(width, 'xl') };
      padding-right: ${ getContainerPadding('xl') };
      padding-left: ${ getContainerPadding('xl') };
    `,
    xl: css`
      max-width: ${ ({ width }) => getContainerMaxWidth(width, 'xxl') };
      padding-right: ${ getContainerPadding('xxl') };
      padding-left: ${ getContainerPadding('xxl') };
    `
  }) }
`

export default Container
