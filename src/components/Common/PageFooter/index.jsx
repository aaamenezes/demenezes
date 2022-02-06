import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import Container from '../Container'
import LogoWrapper from '../LogoWrapper'
import SocialMedia from '../SocialMedia'

const FooterWrapper = styled.footer`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2.2rem;
      margin-top: auto;
      margin-bottom: 0;
      background-color: ${ ({ theme }) => theme.color.blackAlt };

      > *:not(:last-child) {
        margin-bottom: 1.1rem;
      }
    `,
    sm: css`
      flex-direction: row-reverse;
      justify-content: space-between;

      > *:not(:last-child) {
        margin-bottom: 0;
        margin-right: 1.1rem;
      }
    `
  }) }
`

export default function PageFooter() {
  return (
    <Container as={FooterWrapper} width='xxxl' fluid>
      <SocialMedia />
      <LogoWrapper />
    </Container>
  )
}
