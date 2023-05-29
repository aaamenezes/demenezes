import styled, { css } from 'styled-components'
import getBreakpoints from '../utils/getBreakpoints'

export const PaginationButton = styled.a`
  ${ getBreakpoints({
    xs: css`
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      line-height: ${ ({ theme }) => theme.lineHeight.button };
      padding: 0.66rem;
      border-radius: ${ ({ theme }) => theme.borderRadius };
      border: 1px solid ${ ({ theme }) => theme.color.neutral_900 };
      transition: ${ ({ theme }) => theme.transition.fast };
      cursor: pointer;

      &::after {
        content: '';
        position: absolute;
        z-index: ${ ({ theme }) => theme.zIndex.under };
        ${ ({ label }) => label === 'previous' ? 'right: 0;' : 'left: 0;' }
        height: 100%;
        width: 0;
        background-color: ${ ({ theme }) => theme.color.red_500 };
        transition: ${ ({ theme }) => theme.transition.fast };
      }

      &:hover,
      &:focus {
        color: ${ ({ theme }) => theme.color.neutral_50 };
        border-color: ${ ({ theme }) => theme.color.red_500 };
        &::after {
          width: 100%;
        }
      }
    `,
    md: css`
      width: initial;
    `
  }) }
`
