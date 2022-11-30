import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import Container from '../Common/Container'
import PostCard from '../Common/PostCard'

const RelatedPostsGrid = styled.div`
  ${ getBreakpoints({
    xs: css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: ${ ({ theme }) => `${ theme.spacing.text }rem` };
    `,
    md: css`
      gap: 0;
    `
  }) }
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
