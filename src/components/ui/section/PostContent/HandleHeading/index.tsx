import { clsx } from '@/utils/clsx';
import { simplifyString } from '@/utils/simplifyString';
import type { Heading as HeadingNode } from 'datocms-structured-text-utils';
import { isSpan } from 'datocms-structured-text-utils';
import style from '../styles.module.css';

export default function HandleHeading({ node }: { node: HeadingNode }) {
  const HeadingLevel = `h${node.level}` as keyof HTMLElementTagNameMap;

  const headingText = node.children
    .filter(isSpan)
    .map(child => child.value)
    .join('');
  const id = simplifyString(headingText);

  const headingLevelClassName =
    style[HeadingLevel as keyof typeof style] || style.h2;

  return (
    <HeadingLevel
      className={clsx(style.heading, headingLevelClassName)}
      key={headingText}
      id={id}
    >
      <a className={style.headingLink} href={`#${id}`}>
        <span className={style.headingLinkText}>{headingText}</span>
      </a>
    </HeadingLevel>
  );
}
