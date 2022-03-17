import React from 'react'
import styled, { css } from 'styled-components'
// eslint-disable-next-line import/no-cycle
import StructuredTextDatoCMS from './StructuredTextDatoCMS'
import getBreakpoints from '../../utils/getBreakpoints'

const StyledTextBox = styled.div`
  ${ getBreakpoints({
    xs: css`
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.h3 }rem` };
      padding: 2rem;
      background-color: ${ ({ theme }) => theme.color.red_50 };
      margin-top: 0;

      > *:first-child {
        margin-top: 0;
      }
    `,
    sm: css`
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.h2 }rem` };
    `,
    md: css`
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.h1 }rem` };
    `
  }) }
`

export default function TextBox({ content }) {
  return (
    <StyledTextBox>
      <StructuredTextDatoCMS data={content} />
    </StyledTextBox>
  )
}
