import type { TextProps } from './types';

export default function Text({
  children,
  as: Tag = 'p',
  className = '',
}: TextProps) {
  return <Tag className={className}>{children}</Tag>;
}
