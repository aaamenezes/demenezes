import React from 'react'
import styled, { css } from 'styled-components'
import Container from '../../common/Container'

const HeroWrapper = styled.article`
  ${ ({ theme, heroPost }) => css`
      height: 100vh;
      padding-top: 74px;
      background: linear-gradient(
        0deg,
        ${ theme.color.black + theme.opacity.medium.hex },
        ${ theme.color.black + theme.opacity.medium.hex }
      ), url('${ heroPost.coverImage }');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
  ` }
`

const HeroTitle = styled.h3`
  color: ${ ({ theme }) => theme.color.white };
`

export default function PostsWrapper({ allPosts }) {
  const heroPost = allPosts[0]

  const otherPosts = allPosts.slice(1)
  const otherPostsElements = otherPosts.map(post => (
    <Container as='article' key={post.title}>
      <h3>{post.title}</h3>
      <img
        src={post.coverImage}
        alt={`Imagem de capa do post ${ post.title }`}
      />
    </Container>
  ))

  return (
    <Container as='main' style={{ padding: '0' }}>
      <Container as={HeroWrapper} heroPost={heroPost}>
        <HeroTitle>{heroPost.title}</HeroTitle>
      </Container>
      {otherPostsElements}
    </Container>
  )
}
