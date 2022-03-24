import React from 'react'
import styled, { css } from 'styled-components'
// eslint-disable-next-line import/no-cycle
import StructuredTextDatoCMS from './StructuredTextDatoCMS'
import getBreakpoints from '../../utils/getBreakpoints'

const StyledTextBox = styled.div`
  ${ getBreakpoints({
    xs: css`
      padding: 1rem;
      margin-top: 0;
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.h3 }rem` };
      background-color: ${ ({ theme }) => theme.color.red_50 };

      > *:first-child {
        margin-top: 0;
      }
    `,
    sm: css`
      padding: 1.5rem;
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.h2 }rem` };
    `,
    md: css`
      padding: 2rem;
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
