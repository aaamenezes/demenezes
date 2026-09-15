import { clsx } from '@/utils/clsx';
import type { CSSProperties } from 'react';
import { useCallback } from 'react';
import { usePostCardContext } from '../context';
import styles from './styles.module.css';
import type { InfosProps } from './types';

function Infos({ children }: InfosProps) {
  const { isCompact, isHero } = usePostCardContext();

  const getInfosWidth = useCallback(
    (isHero: boolean | undefined, compact: boolean | undefined) => {
      if (compact) return '100%';
      if (isHero) return '50%';
      return '62%';
    },
    []
  );

  return (
    <div
      className={clsx(
        styles.postCardInfosWrapper,
        isHero && styles.isHero,
        isCompact && styles.isCompact
      )}
      style={
        {
          '--post-card-infos-width': getInfosWidth(isHero, isCompact),
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

Infos.displayName = 'PostCard.Infos';

export default Infos;
