import type { CSSProperties } from 'react';
import Icon from '../../base/Icon';
import { IconName } from '../../base/Icon/types';
import S from './styles.module.css';

export default function ToggleModalButton({
  onClick = () => {},
  icon,
  color = 'currentColor',
  ...props
}: {
  onClick: () => void;
  icon: IconName;
  color?: string;
}) {
  return (
    <button
      className={S.button}
      style={{ '--button-color': color } as CSSProperties}
      onClick={onClick}
      color={color}
      {...props}
    >
      <Icon className={S.i} name={icon} />
    </button>
  );
}
