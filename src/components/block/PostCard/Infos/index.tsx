import React from 'react';
import styled, { css } from 'styled-components';
import PostCardFooter from '../Footer';
import PostCardHeader from '../Header';
import PostCardDescription from '../Description';
import getBreakpoints from '../../../../utils/getBreakpoints';
import { PostSummaryProps } from '../../../../types';

const PostCardInfosWrapper = styled.div<{
  hero: boolean;
  isCompact: boolean;
  wrapperWidth: string;
}>`
  ${({ theme, hero, wrapperWidth, isCompact }) =>
    getBreakpoints({
      xs: css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: ${hero && '100%'};
        color: ${hero && theme.color.neutral_100};
      `,
      md: css`
        width: ${wrapperWidth};
        margin-left: ${!isCompact && 'auto'};
        margin-right: 0;
      `,
    })}
`;

export default function PostCardInfos({
  post,
  hero = false,
  isCompact = false,
}: {
  post: PostSummaryProps;
  hero?: boolean;
  isCompact?: boolean;
}) {
  const { _firstPublishedAt, metaDescription, _updatedAt } = post;

  function getWrapperWidth(isHero: boolean, compact: boolean) {
    if (compact) return '100%';
    if (isHero) return '50%';
    return '62%';
  }

  return (
    <PostCardInfosWrapper
      hero={hero}
      isCompact={isCompact}
      wrapperWidth={getWrapperWidth(hero, isCompact)}
    >
      <PostCardHeader post={post} hero={hero} isCompact={isCompact} />
      <PostCardDescription
        description={metaDescription}
        hero={hero}
        isCompact={isCompact}
      />
      <PostCardFooter
        date={_firstPublishedAt}
        update={_updatedAt}
        isCompact={isCompact}
      />
    </PostCardInfosWrapper>
  );
}
