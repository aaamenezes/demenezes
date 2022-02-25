import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'
import Icon from '../Icon'

const StyledLinkButton = styled.a`
  display: ${ ({ inline }) => inline ? 'inline' : 'block' };
  font-weight: ${ ({ theme, inline }) => !inline && theme.fontWeight.button };
  letter-spacing: ${ ({ theme, inline }) => (
    !inline && theme.letterSpacing.button
  ) };
  text-decoration: ${ ({ inline }) => !inline && 'none' };
  color: ${ ({ theme, inline }) => inline ? theme.color.red : 'currentColor' };
`

export default function LinkButton({
  href,
  external,
  inline,
  children,
  handleClick,
  type,
  disabled,
  ...props
}) {
  if (href) {
    return (
      <NextLink href={href} passHref>
        <StyledLinkButton
          target={external ? '_blank' : '_self'}
          rel={external ? 'noopener noreferrer external' : 'same'}
          inline={inline}
          {...props}
        >
          {children}
          {external && inline && <Icon name='external' inline />}
        </StyledLinkButton>
      </NextLink>
    )
  }

  return (
    <StyledLinkButton
      type={type}
      as='button'
      disabled={disabled}
      onClick={handleClick && (() => handleClick())}
    >
      {children}
    </StyledLinkButton>
  )
}
