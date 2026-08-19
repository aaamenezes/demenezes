import type { TextProps } from './types';

export default function Text({
  children,
  as: Tag = 'p',
  className,
  ariaHidden,
}: TextProps) {
  return (
    <Tag className={className} aria-hidden={ariaHidden}>
      {children}
    </Tag>
  );
}
