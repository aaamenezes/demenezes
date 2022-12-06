import React from 'react'
import styled from 'styled-components'
import HeroPostCard from './HeroPostCard'
import PostCard from '../Common/PostCard'
import Newsletter from '../Common/Newsletter'
import { getPageInfos } from '../../utils/getPageInfos'

const StyledPostsWrapper = styled.main`
  padding-top: ${ ({ isHome }) => !isHome && '6.6rem' };
`

export default function PostsWrapper({ postsList }) {
  const { CURRENT_PAGE } = getPageInfos()
  const heroPost = postsList[0]

  const isHome = CURRENT_PAGE === 'home'
  const firstBlockStart = isHome ? 1 : 0
  const firstBlockEnd = postsList.length / 2
  const firstBlockPosts = postsList.slice(firstBlockStart, firstBlockEnd).map(
    post => <PostCard key={post.title} post={post} imageRatio='4x3' />
  )

  const secondBlockStart = firstBlockEnd
  const secondBlockEnd = postsList.length
  const secondBlockPosts = postsList.slice(
    secondBlockStart, secondBlockEnd
  ).map(post => <PostCard key={post.title} post={post} imageRatio='4x3' />)

  return (
    <StyledPostsWrapper isHome={isHome}>
      { isHome && <HeroPostCard post={heroPost} /> }
      {firstBlockPosts}
      <Newsletter />
      {secondBlockPosts}
    </StyledPostsWrapper>
  )
}
