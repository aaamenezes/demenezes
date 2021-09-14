import React from 'react'
import styled from 'styled-components'
import { LOGO } from '../../../settings'
import LinkButton from '../LinkButton'

const LogoLink = styled.a`
  display: block;
`

export default function LogoWrapper() {
  return (
    <LinkButton href='/' as={LogoLink}>
      {LOGO}
    </LinkButton>
  )
}
