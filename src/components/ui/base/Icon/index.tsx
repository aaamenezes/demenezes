import type { CSSProperties } from 'react';
import { iconMap } from './iconMap';
import style from './styles.module.css';
import type { IconName } from './types';
import { clsx } from '../../../../utils/clsx';

export default function Icon({
  name,
  color: propIconColor = '',
  inline = false,
  className: propIconClassName = '',
}: {
  name: IconName;
  color?: string;
  inline?: boolean;
  className?: string;
}) {
  const { className: mapIconClass, color: mapIconColor } = iconMap[name];

  const classes = clsx(style.icon, mapIconClass, propIconClassName, {
    [style.inline]: inline,
  });

  /**
   * remover espaço vazio desse componente
   * mover para a chamada do icon external
   */

  return (
    <>
      {name === 'external' && ' '}
      <i
        className={classes}
        style={
          {
            '--icon-color': propIconColor || mapIconColor || 'currentColor',
            '--icon-transform': name === 'external' ? 'scale(1)' : 'scale(1.5)',
          } as CSSProperties
        }
      />
    </>
  );
}
