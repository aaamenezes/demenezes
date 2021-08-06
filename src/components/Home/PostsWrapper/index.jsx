import React from 'react'
import styled from 'styled-components'
import Container from '../../common/Container'
import PostCard from '../../common/PostCard'

const HeroWrapper = styled.article`
  height: 100vh;
  padding-top: 74px;
  background: ${ ({ theme, heroPost }) => `linear-gradient(
    0deg,
    ${ theme.color.black + theme.opacity.medium.hex },
    ${ theme.color.black + theme.opacity.medium.hex }
    ), url('${ heroPost.coverImage }')
  ` };
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed; */
`

const HeroTitle = styled.h3`
  color: ${ ({ theme }) => theme.color.white };
`

export default function PostsWrapper({ allPosts }) {
  const heroPost = allPosts[0]

  const otherPosts = allPosts.slice(1)
  const otherPostsElements = otherPosts.map(post => (
    <PostCard
      key={post.title}
      title={post.title}
      imageURL={post.coverImage}
      imageAlt={`Imagem de capa: ${ post.title }`}
      imageRatio='4x3'
    />
  ))

  return (
    <main>
      <Container as={HeroWrapper} heroPost={heroPost}>
        <HeroTitle>{heroPost.title}</HeroTitle>
      </Container>
      {otherPostsElements}
    </main>
  )
}
