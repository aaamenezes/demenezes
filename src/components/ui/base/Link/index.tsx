import { clsx } from '@/utils/clsx';
import { ExternalLink } from 'lucide-react';
import NextLink from 'next/link';
import type { ReactNode } from 'react';
import style from './styles.module.css';

export default function Link({
  href,
  children,
  isExternal = false,
  inline = false,
  className = '',
}: {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
  inline?: boolean;
  className?: string;
}) {
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
            <ExternalLink />
          </>
        ) : (
          children
        )}
      </a>
    </NextLink>
  );
}
