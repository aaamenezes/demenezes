import { clsx } from '@/utils/clsx';
import { simplifyString } from '@/utils/simplifyString';
import type { Heading as HeadingNode } from 'datocms-structured-text-utils';
import { isSpan } from 'datocms-structured-text-utils';
import type { ReactNode } from 'react';
import style from '../styles.module.css';

export default function HandleHeading({
  node,
  children,
}: {
  node: HeadingNode;
  children: ReactNode;
}) {
  const HeadingLevel = `h${node.level}` as keyof HTMLElementTagNameMap;

  const anchorLink = simplifyString(
    node.children
      .filter(isSpan)
      .map(child => child.value)
      .join('')
  );

  function isValidClassName(
    className: string
  ): className is keyof typeof style {
    return className in style;
  }

  const headingLevelClassName = isValidClassName(HeadingLevel)
    ? style[HeadingLevel]
    : style.h2;

  return (
    <HeadingLevel
      className={clsx(style.heading, headingLevelClassName)}
      key={anchorLink}
      id={anchorLink}
    >
      <a className={style.headingLink} href={`#${anchorLink}`}>
        <span className={style.headingLinkText}>{children}</span>
      </a>
    </HeadingLevel>
  );
}
