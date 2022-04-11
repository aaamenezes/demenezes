import React from 'react'
import styled from 'styled-components'
import LinkButton from '../LinkButton'

const LogoLink = styled.a`
  position: relative;
  display: block;
  transition: ${ ({ theme }) => theme.transition.fast };

  &::after {
    content: '';
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: ${ ({ theme }) => theme.color.neutral_100 };
    transition: ${ ({ theme }) => theme.transition.fast };
  }

  &:hover::after {
    width: 100%;
  }
`

const Logo = styled.strong`
  display: block;
  line-height: ${ ({ theme }) => theme.lineHeight.button };
  font-size: ${ ({ theme }) => theme.fontSize.h4 };
`

export default function LogoWrapper({ preview }) {
  return (
    <LinkButton href='/' as={LogoLink}>
      <Logo>{preview ? 'Preview' : 'deMenezes'}</Logo>
    </LinkButton>
  )
}
