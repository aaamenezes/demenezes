import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'
import Icon from './Icon'

const StyledLinkButton = styled.a`
  display: ${ ({ inline }) => inline ? 'inline' : 'block' };
  font-weight: ${ ({ theme, inline }) => !inline && theme.fontWeight.button };
  letter-spacing: ${ ({ theme, inline }) => (
    !inline && theme.letterSpacing.button
  ) };
  font-family: ${ ({ theme, inline }) => (
    theme.fontFamily[inline ? 'text' : 'display']
  ) };
  text-decoration: none;
  color: ${ ({ theme, inline }) => inline && theme.color.red_700 };
  cursor: pointer;
`

const LinkText = styled.span`
  text-decoration: ${ ({ inline }) => inline && 'underline' };
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
  const linkInner = (external && inline)
    ? (
      <>
        <LinkText inline={inline}>
          {children}
        </LinkText>
        <Icon name='external' inline />
      </>
    )
    : children

  if (href) {
    return (
      <NextLink href={href} passHref legacyBehavior>
        <StyledLinkButton
          target={external ? '_blank' : '_self'}
          rel={external ? 'noopener noreferrer external' : 'same'}
          inline={inline}
          {...props}
        >
          {linkInner}
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
      {...props}
    >
      {children}
    </StyledLinkButton>
  )
}
