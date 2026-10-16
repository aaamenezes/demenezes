import { clsx } from '@/utils/clsx';
import type { CSSProperties } from 'react';
import { usePostCardContext } from '../context';
import styles from './styles.module.css';
import type { InfosProps } from './types';

function Infos({ children }: InfosProps) {
  const { isCompact } = usePostCardContext();

  return (
    <div
      className={clsx(
        styles.postCardInfosWrapper,
        isCompact && styles.isCompact
      )}
      style={
        {
          '--post-card-infos-width': isCompact ? '100%' : '62%',
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

Infos.displayName = 'PostCard.Infos';

export default Infos;
