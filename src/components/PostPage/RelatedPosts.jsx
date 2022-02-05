import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'
import Swiper from '../Common/Swiper'

const StyledRelatedPosts = styled.section``

export default function RelatedPosts({ postCategory, relatedPosts }) {
  return (
    <Container as={StyledRelatedPosts} width='xl'>
      <header>
        <h2>{`Outros posts sobre ${ postCategory }`}</h2>
      </header>
      <Swiper slides={relatedPosts} />
    </Container>
  )
}
