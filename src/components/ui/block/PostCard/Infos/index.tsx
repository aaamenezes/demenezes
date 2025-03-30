import { CSSProperties } from 'react';
import { PostSummaryProps } from '../../../../../types';
import { clsx } from '../../../../../utils/clsx';
import PostCardDescription from '../Description';
import PostCardFooter from '../Footer';
import PostCardHeader from '../Header';
import S from './styles.module.css';

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

  function getWrapperWidth(isHero: boolean, compact: boolean) {
    if (compact) return '100%';
    if (isHero) return '50%';
    return '62%';
  }

  return (
    <div
      className={clsx(
        S.postCardInfosWrapper,
        isHero && S.isHero,
        isCompact && S.isCompact
      )}
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
