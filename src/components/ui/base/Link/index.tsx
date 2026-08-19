import { clsx } from '@/utils/clsx';
import { ExternalLink } from 'lucide-react';
import NextLink from 'next/link';
import style from './styles.module.css';
import type { LinkProps } from './types';

export default function Link({
  href,
  children,
  isExternal = false,
  className,
}: LinkProps) {
  const isChildrenText = typeof children === 'string';
  const showExternalIcon = isExternal && isChildrenText;

  return (
    <NextLink
      href={href}
      className={clsx(style.link, className)}
      target={isExternal ? '_blank' : '_self'}
      rel="noreferrer"
    >
      {children} {showExternalIcon && <ExternalLink size={16} />}
    </NextLink>
  );
}
