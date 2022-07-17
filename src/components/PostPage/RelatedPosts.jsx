import React from 'react'
import Container from '../Common/Container'
import Swiper from '../Common/Swiper'

export default function RelatedPosts({ postCategory, relatedPosts }) {
  if (relatedPosts.length === 0) return false

  return (
    <Container as='section' width='xl'>
      <header>
        <h2>{`Outros posts sobre ${ postCategory }`}</h2>
      </header>
      <Swiper slides={relatedPosts} />
    </Container>
  )
}
