import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import { getGutter } from '../../utils/getGutter'
import Container from '../Common/Container'
import LogoWrapper from '../Common/LogoWrapper'
import SocialMedia from '../Common/SocialMedia'

const FooterWrapper = styled.footer`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: ${ getGutter(10) };
      margin-top: auto;
      margin-bottom: 0;
      background-color: ${ ({ theme }) => theme.color.blackAlt };

      > *:not(:last-child) {
        margin-bottom: ${ getGutter(5) };
      }
    `,
    sm: css`
      flex-direction: row-reverse;
      justify-content: space-between;

      > *:not(:last-child) {
        margin-bottom: 0;
        margin-right: ${ getGutter(5) };
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
