import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import Container from '../../Common/Container'
import PostCardInfos from '../../Common/PostCard/PostCardInfos'

const HeroWrapper = styled.article`
  ${ getBreakpoints({
    xs: css`
      height: 100vh;
      padding-top: 6.6rem;
      padding-bottom: 2.2rem;
      background-image: ${ ({ theme, image }) => css`linear-gradient(
        270deg,
        ${ theme.color.black + theme.opacity.medium.hex },
        ${ theme.color.black + theme.opacity.medium.hex }
      ), url('${ image }') ` };
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
    `,
    md: css`
      background-image: ${ ({ theme, image }) => css`linear-gradient(
        270deg,
        ${ theme.color.black + theme.opacity.hard.hex } 50%,
        ${ theme.color.black + theme.opacity.medium.hex }
      ), url('${ image }')` };
    `
  }) }
`

export default function HeroPostCard({ post }) {
  return (
    <Container
      as={HeroWrapper}
      image={post.coverImage}
      width='xxxl'
      fluid
    >
      <PostCardInfos
        post={post}
        hero
      />
    </Container>
  )
}
