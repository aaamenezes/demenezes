import { clsx } from '@/utils/clsx';
import typographyStyles from '@styles/typography.module.css';
import style from './styles.module.css';
import type { TextProps } from './types';

export default function Text({
  children,
  as: Tag = 'p',
  className,
  ariaHidden,
  inheritTypographyStyles,
  family = 'body',
  size = 'xs',
  weight = 400,
  letterSpacing = 'xs',
  lineHeight = 'xs',
}: TextProps) {
  const typographyClassNames = inheritTypographyStyles
    ? [style.text]
    : [
        typographyStyles[`font-family-${family}`],
        typographyStyles[`font-size-${size}`],
        typographyStyles[`font-weight-${weight}`],
        typographyStyles[`letter-spacing-${letterSpacing}`],
        typographyStyles[`line-height-${lineHeight}`],
      ];

  return (
    <Tag
      className={clsx(...typographyClassNames, className || '')}
      aria-hidden={ariaHidden}
    >
      {children}
    </Tag>
  );
}
