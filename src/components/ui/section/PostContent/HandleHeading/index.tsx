import Heading from '@/components/ui/base/Heading';
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
  const anchorLink = simplifyString(
    node.children
      .filter(isSpan)
      .map(child => child.value)
      .join('')
  );

  const headingTypographyMap = {
    1: { size: 'xxl' },
    2: { size: 'xxl' },
    3: { letterSpacing: 'xxs' },
    4: { size: 'lg' },
    5: { size: 'md' },
    6: { size: 'sm', letterSpacing: 'sm' },
  } as const;

  const typography = headingTypographyMap[node.level];

  return (
    <Heading
      level={node.level}
      className={style.heading}
      key={anchorLink}
      id={anchorLink}
      {...typography}
    >
      <a className={style.headingLink} href={`#${anchorLink}`}>
        <Text
          as="span"
          inheritTypographyStyles
          className={style.headingLinkText}
        >
          {children}
        </Text>
      </a>
    </Heading>
  );
}
