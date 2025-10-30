import Icon from '@/components/ui/base/Icon';
import { clsx } from '@/utils/clsx';
import NextLink from 'next/link';
import type { PropsWithChildren } from 'react';
import style from './styles.module.css';

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
        className={clsx(style.link, className, { [style.inline]: inline })}
        target={isExternal ? '_blank' : '_self'}
        rel="noreferrer"
      >
        {isExternal && inline ? (
          <>
            <span className={inline ? style.text : ''}>{children}</span>
            <Icon name="external" inline={inline} />
          </>
        ) : (
          children
        )}
      </a>
    </NextLink>
  );
}
