import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import Container from '../../Common/Container'

const HeroWrapper = styled.article`
  ${ getBreakpoints({
    xs: css`
      height: 100vh;
      padding-top: 74px;
      margin-bottom: 15%;
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
    `,
    md: css`
      grid-column: 1 / span 3;
    `
  }) }
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
