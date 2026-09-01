import Heading from '@/components/ui/base/Heading';
import Text from '@/components/ui/base/Text';
import { simplifyString } from '@/utils/simplifyString';
import { isSpan } from 'datocms-structured-text-utils';
import styles from '../styles.module.css';
import type { HandleHeadingProps } from './types';

export default function HandleHeading({ node, children }: HandleHeadingProps) {
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
      className={styles.heading}
      key={anchorLink}
      id={anchorLink}
      {...typography}
    >
      <a className={styles.headingLink} href={`#${anchorLink}`}>
        <Text
          as="span"
          inheritTypographyStyles
          className={styles.headingLinkText}
        >
          {children}
        </Text>
      </a>
    </Heading>
  );
}
