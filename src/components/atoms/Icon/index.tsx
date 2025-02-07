import React, { CSSProperties } from 'react';
import S from './styles.module.css';
import { iconMap } from './iconMap';
import { IconName } from './types';

export default function Icon({
  name,
  color,
}: {
  name: IconName;
  color?: string;
}) {
  return (
    <>
      {name === 'external' && ' '}
      <i
        className={S.icon.concat(iconMap[name].className)}
        style={
          {
            '--icon-color': color || iconMap[name].color || 'currentColor',
            '--icon-transform': name === 'external' ? 'scale(1)' : 'scale(1.5)',
          } as CSSProperties
        }
      />
    </>
  );
}
