import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import PostCardFooter from './PostCardFooter'
import PostCardHeader from './PostCardHeader'
import PostCardDescription from './PostCardDescription'

const PostCardInfosWrapper = styled.div`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: ${ ({ hero }) => hero && '100%' };
      color: ${ ({ theme, hero }) => (
    hero ? theme.color.gray : theme.color.black
  ) };
    `,
    md: css`
      width: ${ ({ wrapperWidth }) => wrapperWidth };
      margin-left: ${ ({ isCompact }) => !isCompact && 'auto' };
      margin-right: 0;
    `
  }) }
`

export default function PostCardInfos({ post, hero, isCompact }) {
  const { date, description } = post

  function getWrapperWidth(isHero, compact) {
    if (compact) { return '100%' }
    if (isHero) { return '50%' }
    return '62%'
  }

  return (
    <PostCardInfosWrapper
      hero={hero}
      isCompact={isCompact}
      wrapperWidth={getWrapperWidth(hero, isCompact)}
    >
      <PostCardHeader post={post} hero={hero} />
      <PostCardDescription
        description={description}
        hero={hero}
        isCompact={isCompact}
      />
      <PostCardFooter date={date} isCompact={isCompact} />
    </PostCardInfosWrapper>
  )
}
