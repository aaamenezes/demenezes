import { clsx } from '@/utils/clsx';
import { ExternalLink } from 'lucide-react';
import NextLink from 'next/link';
import type { ReactNode } from 'react';
import style from './styles.module.css';

export default function Link({
  href,
  children,
  isExternal = false,
  className = '',
}: {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
  className?: string;
}) {
  const isChildrenText = typeof children === 'string';
  const showExternalIcon = isExternal && isChildrenText;

  const linkClassNames = clsx(style.link, className, {
    [style.block]: !isChildrenText,
  });

  return (
    <NextLink href={href} passHref legacyBehavior>
      <a
        className={linkClassNames}
        target={isExternal ? '_blank' : '_self'}
        rel="noreferrer"
      >
        {children}{' '}
        {showExternalIcon && (
          <ExternalLink size={16} style={{ verticalAlign: 'bottom' }} />
        )}
      </a>
    </NextLink>
  );
}
