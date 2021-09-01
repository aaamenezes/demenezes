import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import HeroPostCard from '../HeroPostCard'
import PostCard from '../../Common/PostCard'
import Newsletter from '../../Common/Newsletter'
import { getGutter } from '../../../utils/getGutter'

const StyledPostsWrapper = styled.main`
  padding-top: ${ ({ isHome }) => !isHome ? getGutter(30) : 'initial' };
`

export default function PostsWrapper({ postsList, heroRef }) {
  const router = useRouter()
  const isHome = router.pathname === '/'

  const heroPost = postsList[0]

  const firstBlockStart = isHome ? 1 : 0
  const firstBlockEnd = postsList.length / 2
  const firstBlockPosts = postsList.slice(firstBlockStart, firstBlockEnd).map(
    (post, index) => (
      <PostCard
        key={post.title}
        post={post}
        imageRatio='4x3'
        heroRef={(index === 0 && !isHome) ? heroRef : null}
      />
    )
  )

  const secondBlockStart = firstBlockEnd
  const secondBlockEnd = postsList.length
  const secondBlockPosts = postsList.slice(
    secondBlockStart, secondBlockEnd
  ).map(post => <PostCard key={post.title} post={post} imageRatio='4x3' />)

  return (
    <StyledPostsWrapper isHome={isHome}>
      { isHome && <HeroPostCard post={heroPost} heroRef={heroRef} /> }
      {firstBlockPosts}
      <Newsletter />
      {secondBlockPosts}
    </StyledPostsWrapper>
  )
}
