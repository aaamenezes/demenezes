import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

const LinkButtonStyled = styled.a`
  color: currentColor;
`

export default function LinkButton({
  href, external, inline, children, handleClick, type, disabled, ...props
}) {
  if (href) {
    return (
      <NextLink href={href} passHref>
        <LinkButtonStyled
          target={external ? '_blank' : '_self'}
          rel={external ? 'noopener external' : 'same'}
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
