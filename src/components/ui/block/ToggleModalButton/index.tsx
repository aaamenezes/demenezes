import Icon from '@/components/ui/base/Icon';
import { clsx } from '@/utils/clsx';
import type { CSSProperties } from 'react';
import type { IconName } from '../../base/Icon/types';
import style from './styles.module.css';

export default function ToggleModalButton({
  onClick = () => {},
  icon,
  color = 'currentColor',
  className = '',
}: {
  onClick: () => void;
  icon: IconName;
  color?: string;
  className?: string;
}) {
  return (
    <button
      className={clsx(style.button, className)}
      style={{ '--button-color': color } as CSSProperties}
      onClick={onClick}
      color={color}
    >
      <Icon className={style.i} name={icon} />
    </button>
  );
}
