import { CircleHelp } from 'lucide-react';
import { isCmsIconName, map } from './map';
import type { CmsIconProps } from './types';

export default function CmsIcon({ name, size = 24, className }: CmsIconProps) {
  const Icon = isCmsIconName(name) ? map[name] : CircleHelp;

  return <Icon aria-hidden="true" className={className} size={size} />;
}
