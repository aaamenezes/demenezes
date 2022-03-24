import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import Container from '../../Common/Container'
import PostCardInfos from '../../Common/PostCard/PostCardInfos'

const HeroWrapper = styled.article`
  ${ getBreakpoints({
    xs: css`
      /* height: 100vh; */
      padding-top: 6.6rem;
      padding-bottom: 2.2rem;
      background-image: ${ ({ theme, image }) => css`linear-gradient(
        270deg,
        ${ theme.color.neutral_900 + theme.opacity.medium.hex },
        ${ theme.color.neutral_900 + theme.opacity.medium.hex }
      ), url('${ image }') ` };
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
    `,
    md: css`
      background-image: ${ ({ theme, image }) => css`linear-gradient(
        270deg,
        ${ theme.color.neutral_900 + theme.opacity.hard.hex } 55%,
        ${ theme.color.neutral_600 + theme.opacity.medium.hex } 100%
      ), url('${ image }')` };
    `
  }) }
`

export default function HeroPostCard({ post }) {
  console.log('post:', post)
  return (
    <Container
      as={HeroWrapper}
      image={post.thumbnail.url}
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
