import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'
import propToStyle from '../../../utils/propToStyles'
// import Icon from '../icon'

const LinkButtonStyled = styled.a`
  ${ propToStyle('display') }
  ${ propToStyle('padding') }
  ${ propToStyle('borderBottom') }
  ${ propToStyle('backgroundColor') }
`

export default function LinkButton({
  href, external, inline, children, handleClick, type, disabled, ...props
}) {
  if (href) {
    return (
      <NextLink href={href} passHref>
        <LinkButtonStyled
          target={external ? '_blank' : '_self'}
          rel={external ? 'noopener' : 'same'}
          inline={inline}
          {...props}
        >
          {children}
          {/* {' '}
          {external && inline && <Icon name='external' inline />} */}
        </LinkButtonStyled>
      </NextLink>
    )
  }

  return (
    <LinkButtonStyled
      type={type}
      as='button'
      disabled={disabled}
      onClick={handleClick && (() => handleClick())}
    >
      {children}
    </LinkButtonStyled>
  )
}
