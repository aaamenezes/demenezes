export type CmsIconName =
  | 'code-xml'
  | 'briefcase-business'
  | 'circle-help'
  | 'users'
  | 'clock-plus'
  | 'terminal'
  | 'wrench';

export interface CmsIconProps {
  name: string;
  size?: number;
  className?: string;
}
