import React from 'react'
import styled, { css } from 'styled-components'
import PostCardFooter from './PostCardFooter'
import PostCardHeader from './PostCardHeader'
import PostCardDescription from './PostCardDescription'
import getBreakpoints from '../../utils/getBreakpoints'

const PostCardInfosWrapper = styled.div`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: ${ ({ hero }) => hero && '100%' };
      color: ${ ({ theme, hero }) => hero && theme.color.neutral_100 };
    `,
    md: css`
      width: ${ ({ wrapperWidth }) => wrapperWidth };
      margin-left: ${ ({ isCompact }) => !isCompact && 'auto' };
      margin-right: 0;
    `
  }) }
`

export default function PostCardInfos({ post, hero, isCompact }) {
  const { _firstPublishedAt, metaDescription, _updatedAt } = post

  function getWrapperWidth(isHero, compact) {
    if (compact) return '100%'
    if (isHero) return '50%'
    return '62%'
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
  )
}
