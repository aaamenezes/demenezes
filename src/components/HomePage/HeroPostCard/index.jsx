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
      background-image: ${ ({ theme, imageSrcList }) => css`linear-gradient(
        270deg,
        ${ theme.color.neutral_900 + theme.opacity.medium.hex },
        ${ theme.color.neutral_900 + theme.opacity.medium.hex }
      ), url('${ imageSrcList[0] }') ` };
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
    `,
    sm: css`
      background-image: ${ ({ theme, imageSrcList }) => css`linear-gradient(
        270deg,
        ${ theme.color.neutral_900 + theme.opacity.medium.hex },
        ${ theme.color.neutral_900 + theme.opacity.medium.hex }
      ), url('${ imageSrcList[1] }') ` };
    `,
    md: css`
      background-image: ${ ({ theme, imageSrcList }) => css`linear-gradient(
        270deg,
        ${ theme.color.neutral_900 + theme.opacity.hard.hex } 55%,
        ${ theme.color.neutral_600 + theme.opacity.medium.hex } 100%
      ), url('${ imageSrcList[2] }')` };
    `,
    lg: css`
      background-image: ${ ({ theme, imageSrcList }) => css`linear-gradient(
        270deg,
        ${ theme.color.neutral_900 + theme.opacity.hard.hex } 55%,
        ${ theme.color.neutral_600 + theme.opacity.medium.hex } 100%
      ), url('${ imageSrcList[3] }')` };
    `
  }) }
`

export default function HeroPostCard({ post }) {
  const imageSrcList = post.thumbnail.responsiveImage.srcSet
    .split(',')
    .map(size => size.split(' ')[0])

  return (
    <Container
      as={HeroWrapper}
      imageSrcList={imageSrcList}
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
