import React from 'react'
import styled, { css } from 'styled-components'
import Container from '../../Common/Container'

const HeroWrapper = styled.article`
  height: 100vh;
  padding-top: 74px;
  background: ${ ({ theme, post }) => css`linear-gradient(
    0deg,
    ${ theme.color.black + theme.opacity.medium.hex },
    ${ theme.color.black + theme.opacity.medium.hex }
    ), url('${ post.coverImage }')
  ` };
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`

const HeroTitle = styled.h3`
  color: ${ ({ theme }) => theme.color.white };
`

export default function HeroPostCard({ post, heroRef }) {
  return (
    <Container as={HeroWrapper} post={post} ref={heroRef}>
      <HeroTitle>{post.title}</HeroTitle>
    </Container>
  )
}
