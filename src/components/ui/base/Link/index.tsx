import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import { clsx } from '../../../../utils/clsx';
import Icon from '../Icon';
import S from './styles.module.css';

export default function Link({
  href,
  children,
  isExternal = false,
  inline = false,
  className = '',
}: PropsWithChildren<{
  href: string;
  isExternal?: boolean;
  inline?: boolean;
  className?: string;
}>) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <a
        className={clsx(S.link, inline && S.inline, className)}
        target={isExternal ? '_blank' : '_self'}
        rel="noreferrer"
      >
        {isExternal ? (
          <>
            <span className={inline ? S.text : ''}>{children}</span>
            <Icon name="external" />
          </>
        ) : (
          children
        )}
      </a>
    </NextLink>
  );
}
