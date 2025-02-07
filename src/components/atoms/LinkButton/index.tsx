import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import Icon from '../../Common/Icon';
import S from './styles.module.css';

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
        <span className={inline ? S.text : ''}>{children}</span>
        <Icon name="external" inline />
      </>
    ) : (
      children
    );

  const classes = S.linkButton
    .concat(inline ? ` ${S.inline}` : '')
    .concat(className ? ` ${className}` : '');

  if (href) {
    return (
      <NextLink href={href} passHref legacyBehavior>
        <a
          className={classes}
          target={external ? '_blank' : '_self'}
          rel={external ? 'noopener noreferrer external' : 'same'}
          id={id}
          {...props}
        >
          {linkInner}
        </a>
      </NextLink>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      name={name}
      id={id}
      {...props}
    >
      {children}
    </button>
  );
}
