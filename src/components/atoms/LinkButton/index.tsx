import React, { PropsWithChildren } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import Icon from '../../Common/Icon';

const StyledLinkButton = styled.a<{ inline: boolean; name: string }>`
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  font-weight: ${({ theme, inline }) => !inline && theme.fontWeight.button};
  letter-spacing: ${({ theme, inline }) =>
    !inline && theme.letterSpacing.button};
  font-family: ${({ theme, inline }) =>
    theme.fontFamily[inline ? 'text' : 'display']};
  text-decoration: none;
  color: ${({ theme, inline }) => inline && theme.color.red_700};
  cursor: pointer;
`;

const LinkText = styled.span<{ inline: boolean }>`
  text-decoration: ${({ inline }) => inline && 'underline'};
`;

export default function LinkButton({
  href,
  external = false,
  inline = false,
  children,
  handleClick = () => {},
  type = 'button',
  disabled = false,
  name = '',
  id = '',
  className = '',
  ...props
}: PropsWithChildren<{
  href?: string;
  external?: boolean;
  inline?: boolean;
  handleClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  name?: string;
  id?: string;
  className?: string;
}>) {
  const linkInner =
    external && inline ? (
      <>
        <LinkText inline={inline}>{children}</LinkText>
        <Icon name="external" inline />
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <NextLink href={href} passHref legacyBehavior>
        <StyledLinkButton
          target={external ? '_blank' : '_self'}
          rel={external ? 'noopener noreferrer external' : 'same'}
          inline={inline}
          name={name}
          id={id}
          className={className}
          {...props}
        >
          {linkInner}
        </StyledLinkButton>
      </NextLink>
    );
  }

  return (
    <StyledLinkButton
      type={type}
      as="button"
      disabled={disabled}
      onClick={handleClick}
      inline={inline}
      name={name}
      id={id}
      className={className}
      {...props}
    >
      {children}
    </StyledLinkButton>
  );
}
