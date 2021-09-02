import React from 'react'
import styled from 'styled-components'
import LinkButton from '../LinkButton'

const LogoLink = styled.a`
  display: block;
  transform: ${ ({ isMinimizeHeader }) => (
    isMinimizeHeader ? 'translateY(-200%)' : 'translateX(0)'
  ) };
  transition: ${ ({ theme }) => theme.transition.medium };
`

const Logo = styled.img`
  margin: 0;
`

export default function Logowrapper({ isMinimizeHeader }) {
  return (
    <LinkButton
      href='/'
      as={LogoLink}
      isMinimizeHeader={isMinimizeHeader}
    >
      <Logo
        src='https://via.placeholder.com/200x50'
        alt='Logo do site'
      />
    </LinkButton>
  )
}
