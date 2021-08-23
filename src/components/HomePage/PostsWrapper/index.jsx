import React from 'react'
import styled, { css } from 'styled-components'
import HeroPostCard from '../HeroPostCard'
import PostCard from '../../Common/PostCard'
import Newsletter from '../../Common/Newsletter'
import getBreakpoints from '../../../utils/getBreakpoints'
import Container from '../../Common/Container'
import { getGutter } from '../../../utils/getGutter'

const StyledPostsWrapper = styled.main`
  > * {
    margin-bottom: ${ getGutter(15) };
  }
`

const OtherPosts = styled.section`
  ${ getBreakpoints({
    md: css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 5%;
    `
  }) }
`

export default function PostsWrapper({ postsList, heroRef }) {
  const heroPost = postsList[0]

  const firstBlockStart = 1
  const firstBlockEnd = postsList.length / 2
  const firstBlockPosts = postsList.slice(firstBlockStart, firstBlockEnd).map(
    (post, index) => (
      <PostCard
        key={post.title}
        title={post.title}
        postLink={`/posts/${ post.slug }`}
        imageURL={post.coverImage}
        imageAlt={`Imagem de capa do post: ${ post.title }`}
        imageRatio='4x3'
        index={index}
      />
    )
  )

  const secondBlockStart = firstBlockEnd
  const secondBlockEnd = postsList.length
  const secondBlockPosts = postsList.slice(
    secondBlockStart, secondBlockEnd
  ).map((post, index) => (
    <PostCard
      key={post.title}
      title={post.title}
      postLink={`/posts/${ post.slug }`}
      imageURL={post.coverImage}
      imageAlt={`Imagem de capa do post: ${ post.title }`}
      imageRatio='4x3'
      index={index}
    />
  ))

  return (
    <StyledPostsWrapper>
      <HeroPostCard post={heroPost} heroRef={heroRef} />
      <Container as={OtherPosts}>
        {firstBlockPosts}
        <Newsletter />
        {secondBlockPosts}
      </Container>
    </StyledPostsWrapper>
  )
}
