import React from 'react'
import styled from 'styled-components'
import LinkButton from '../LinkButton'

const LogoLink = styled.a`
  display: block;
  transition: ${ ({ theme }) => theme.transition.fast };

  &:hover {
    transform: scale(1.5);
  }
`

const Logo = styled.strong`
  display: block;
  line-height: ${ ({ theme }) => theme.lineHeight.button };
  font-size: ${ ({ theme }) => theme.fontSize.h4 };
`

export default function LogoWrapper() {
  return (
    <LinkButton href='/' as={LogoLink}>
      <Logo>deMenezes</Logo>
    </LinkButton>
  )
}
