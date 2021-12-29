import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import Container from '../Common/Container'
import LogoWrapper from '../Common/LogoWrapper'
import SocialMedia from '../Common/SocialMedia'

const FooterWrapper = styled.footer`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
      background-color: ${ ({ theme }) => theme.color.blackAlt };
    `,
    md: css`
      justify-content: space-between;
    `
  }) }
`

const FooterLogoWrapper = styled.div`
  ${ getBreakpoints({
    xs: css`
      display: none;
    `,
    md: css`
      display: initial;
    `
  }) }
`

export default function PageFooter() {
  return (
    <Container as={FooterWrapper} fullWidth>
      <FooterLogoWrapper>
        <LogoWrapper />
      </FooterLogoWrapper>
      <SocialMedia />
    </Container>
  )
}