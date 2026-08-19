import Text from '@/components/ui/base/Text';
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

  const headingTypographyMap = {
    1: { size: 'xxl', letterSpacing: 'xs' },
    2: { size: 'xxl', letterSpacing: 'xs' },
    3: { size: 'xl', letterSpacing: 'xxs' },
    4: { size: 'lg', letterSpacing: 'xs' },
    5: { size: 'md', letterSpacing: 'xs' },
    6: { size: 'sm', letterSpacing: 'sm' },
  } as const;

  const typography = headingTypographyMap[node.level];

  return (
    <HeadingLevel className={style.heading} key={anchorLink} id={anchorLink}>
      <a className={style.headingLink} href={`#${anchorLink}`}>
        <Text
          as="span"
          family="heading"
          size={typography.size}
          weight={700}
          letterSpacing={typography.letterSpacing}
          lineHeight="sm"
          className={style.headingLinkText}
        >
          {children}
        </Text>
      </a>
    </HeadingLevel>
  );
}
