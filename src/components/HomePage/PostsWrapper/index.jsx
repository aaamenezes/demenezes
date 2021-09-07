import React, { useContext } from 'react'
import styled from 'styled-components'
import HeroPostCard from '../HeroPostCard'
import PostCard from '../../Common/PostCard'
import Newsletter from '../../Common/Newsletter'
import { getGutter } from '../../../utils/getGutter'
import { BlogContext } from '../../../BlogContext'

const StyledPostsWrapper = styled.main`
  padding-top: ${ ({ isHome }) => !isHome && getGutter(30) };
`

export default function PostsWrapper({ postsList, heroRef }) {
  const { currentPage } = useContext(BlogContext)
  const isHome = currentPage === 'home'
  const isListing = currentPage === 'listing'

  const heroPost = postsList[0]

  const firstBlockStart = isHome ? 1 : 0
  const firstBlockEnd = postsList.length / 2
  const firstBlockPosts = postsList.slice(firstBlockStart, firstBlockEnd).map(
    (post, index) => {
      const heroRefValue = (index === 0 && isListing ? heroRef : null)
      return (
        <PostCard
          key={post.title}
          post={post}
          imageRatio='4x3'
          heroRef={heroRefValue}
        />
      )
    }
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
