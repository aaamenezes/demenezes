import React from 'react'
import styled from 'styled-components'
import LinkButton from '../LinkButton'

const LogoLink = styled.a`
  display: block;
`

const Logo = styled.img`
  margin: 0;
`

export default function LogoWrapper() {
  return (
    <LinkButton href='/' as={LogoLink}>
      <Logo
        src='https://via.placeholder.com/200x50'
        alt='Logo do site'
      />
    </LinkButton>
  )
}
