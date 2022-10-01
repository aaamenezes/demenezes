import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'
import PostCard from '../Common/PostCard'

const RelatedPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${ ({ theme }) => `${ theme.spacing.text }rem` };
`

export default function RelatedPosts({ postCategory, relatedPosts }) {
  if (relatedPosts.length === 0) return false

  const relatedPostsElements = relatedPosts.map(
    post => (
      <PostCard
        key={post.title}
        post={post}
        imageRatio='4x3'
        isCompact
        spacing={0}
      />
    )
  )

  return (
    <Container as='section' width='xl'>
      <header>
        <h2>{`Veja outros posts sobre ${ postCategory }`}</h2>
      </header>
      <RelatedPostsGrid>
        {relatedPostsElements}
      </RelatedPostsGrid>
    </Container>
  )
}
