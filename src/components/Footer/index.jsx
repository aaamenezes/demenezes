import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import Container from '../Common/Container'
import Logowrapper from '../Common/LogoWrapper'
import SocialMedia from '../Common/SocialMedia'

const FooterWrapper = styled.footer`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      justify-content: center;
      align-items: center;
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

export default function Footer() {
  return (
    <Container as={FooterWrapper}>
      <FooterLogoWrapper>
        <Logowrapper isMinimizeHeader={false} />
      </FooterLogoWrapper>
      <SocialMedia />
    </Container>
  )
}
