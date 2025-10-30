import PostCardDescription from '@/components/ui/block/PostCard/Description';
import PostCardFooter from '@/components/ui/block/PostCard/Footer';
import PostCardHeader from '@/components/ui/block/PostCard/Header';
import type { PostSummaryProps } from '@/types';
import { clsx } from '@/utils/clsx';
import type { CSSProperties} from 'react';
import { useCallback } from 'react';
import style from './styles.module.css';

export default function PostCardInfos({
  post,
  isHero = false,
  isCompact = false,
}: {
  post: PostSummaryProps;
  isHero?: boolean;
  isCompact?: boolean;
}) {
  const { _firstPublishedAt, metaDescription, _updatedAt } = post;

  const getWrapperWidth = useCallback((isHero: boolean, compact: boolean) => {
    if (compact) return '100%';
    if (isHero) return '50%';
    return '62%';
  }, []);

  return (
    <div
      className={clsx(style.postCardInfosWrapper, {
        [style.isHero]: isHero,
        [style.isCompact]: isCompact,
      })}
      style={
        {
          '--post-card-infos-width': getWrapperWidth(isHero, isCompact),
        } as CSSProperties
      }
    >
      <PostCardHeader post={post} isHero={isHero} isCompact={isCompact} />
      <PostCardDescription
        description={metaDescription}
        isCompact={isCompact}
      />
      <PostCardFooter
        date={_firstPublishedAt}
        update={_updatedAt}
        isCompact={isCompact}
      />
    </div>
  );
}
