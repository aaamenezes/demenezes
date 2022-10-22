import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import Container from '../../Common/Container'
import PostCardInfos from '../../Common/PostCard/PostCardInfos'
import PostLabel from '../../Common/PostLabel'

const HeroWrapper = styled.article`
  ${ getBreakpoints({
    xs: css`
      position: relative;
      padding-top: 6.6rem;
      padding-bottom: 2.2rem;
      background-image: ${ ({ theme, src }) => css`linear-gradient(
        270deg,
        ${ theme.color.neutral_900 + theme.opacity.medium.hex },
        ${ theme.color.neutral_900 + theme.opacity.medium.hex }
      ), url('${ `${ src }&w=425` }') ` };
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
    `,
    sm: css`
      background-image: ${ ({ theme, src }) => css`linear-gradient(
        270deg,
        ${ theme.color.neutral_900 + theme.opacity.medium.hex },
        ${ theme.color.neutral_900 + theme.opacity.medium.hex }
      ), url('${ `${ src }&w=768` }') ` };
    `,
    md: css`
      background-image: ${ ({ theme, src }) => css`linear-gradient(
        270deg,
        ${ theme.color.neutral_900 + theme.opacity.hard.hex } 55%,
        ${ theme.color.neutral_600 + theme.opacity.medium.hex } 100%
      ), url('${ `${ src }&w=992` }')` };
    `,
    lg: css`
      background-image: ${ ({ theme, src }) => css`linear-gradient(
        270deg,
        ${ theme.color.neutral_900 + theme.opacity.hard.hex } 55%,
        ${ theme.color.neutral_600 + theme.opacity.medium.hex } 100%
      ), url('${ `${ src }&w=1200` }')` };
    `,
    xl: css`
      background-image: ${ ({ theme, src }) => css`linear-gradient(
        270deg,
        ${ theme.color.neutral_900 + theme.opacity.hard.hex } 55%,
        ${ theme.color.neutral_600 + theme.opacity.medium.hex } 100%
      ), url('${ `${ src }&w=1600` }')` };
    `,
    xxl: css`
      background-image: ${ ({ theme, src }) => css`linear-gradient(
        270deg,
        ${ theme.color.neutral_900 + theme.opacity.hard.hex } 55%,
        ${ theme.color.neutral_600 + theme.opacity.medium.hex } 100%
      ), url('${ `${ src }&w=2600` }')` };
    `
  }) }
`

export default function HeroPostCard({ post }) {
  const { src } = post.thumbnail.responsiveImage

  return (
    <Container
      as={HeroWrapper}
      src={src}
      width='xxxl'
      fluid
    >
      <PostCardInfos
        post={post}
        hero
      />
      <PostLabel>
        {post.category}
      </PostLabel>
    </Container>
  )
}
