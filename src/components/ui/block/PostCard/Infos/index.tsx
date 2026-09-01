import PostCardDescription from '@/components/ui/block/PostCard/Description';
import PostCardFooter from '@/components/ui/block/PostCard/Footer';
import PostCardHeader from '@/components/ui/block/PostCard/Header';
import { clsx } from '@/utils/clsx';
import type { CSSProperties } from 'react';
import { useCallback } from 'react';
import styles from './styles.module.css';
import type { PostCardInfosProps } from './types';

export default function PostCardInfos({
  post,
  isHero = false,
  isCompact = false,
}: PostCardInfosProps) {
  const { _firstPublishedAt, metaDescription, _updatedAt } = post;

  const getWrapperWidth = useCallback((isHero: boolean, compact: boolean) => {
    if (compact) return '100%';
    if (isHero) return '50%';
    return '62%';
  }, []);

  return (
    <div
      className={clsx(
        styles.postCardInfosWrapper,
        isHero && styles.isHero,
        isCompact && styles.isCompact
      )}
      style={
        {
          '--post-card-infos-width': getWrapperWidth(isHero, isCompact),
        } as CSSProperties
      }
    >
      <PostCardHeader post={post} isHero={isHero} />
      <PostCardDescription
        description={metaDescription}
        isCompact={isCompact}
        isHero={isHero}
      />
      <PostCardFooter
        publicationDate={_firstPublishedAt}
        updateDate={_updatedAt}
        isCompact={isCompact}
      />
    </div>
  );
}
