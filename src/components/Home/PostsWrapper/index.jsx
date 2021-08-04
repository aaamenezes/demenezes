import React from 'react'
import Container from '../../common/Container'

export default function PostsWrapper({ allPosts }) {
  const heroPost = allPosts[0]
  const heroPostElement = (
    <Container
      as='article'
      style={{
        height: '100vh',
        paddingTop: '74px',
        backgroundImage: `url(${ heroPost.coverImage })`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <h3>{heroPost.title}</h3>
    </Container>
  )

  const otherPosts = allPosts.slice(1)
  const otherPostsElements = otherPosts.map(post => (
    <Container
      as='article'
      key={post.title}
    >
      <h3>{post.title}</h3>
      <img
        src={post.coverImage}
        alt={`Imagem de capa do post ${ post.title }`}
      />
    </Container>
  ))

  return (
    <Container as='main' style={{ padding: '0' }}>
      {heroPostElement}
      {otherPostsElements}
    </Container>
  )
}
