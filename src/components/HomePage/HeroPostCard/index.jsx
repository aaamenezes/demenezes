import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'
import Container from '../../Common/Container'
import PostFooter from '../../Common/PostCard/PostFooter'
import PostHeader from '../../Common/PostCard/PostHeader'
import PostLead from '../../Common/PostCard/PostLead'

const HeroWrapper = styled.article`
  ${ getBreakpoints({
    xs: css`
      height: 100vh;
      padding-top: ${ getGutter(30) };
      padding-bottom: ${ getGutter(10) };
      margin-bottom: 10%;
      background-image: ${ ({ theme, post }) => css`linear-gradient(
        270deg,
        ${ theme.color.black + theme.opacity.medium.hex },
        ${ theme.color.black + theme.opacity.medium.hex }
      ), url('${ post.coverImage }') ` };
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
    `,
    md: css`
      background-image: ${ ({ theme, post }) => css`linear-gradient(
        270deg,
        ${ theme.color.black + theme.opacity.hard.hex } 50%,
        ${ theme.color.black + theme.opacity.medium.hex }
      ), url('${ post.coverImage }')` };
    `
  }) }
`

const HeroLink = styled.a`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      color: ${ ({ theme }) => theme.color.white };
    `,
    md: css`
      width: 50%;
      margin-left: auto;
    `
  }) }
`

export default function HeroPostCard({ post, heroRef }) {
  const { title, date, slug, lead, category } = post

  return (
    <Container as={HeroWrapper} post={post} ref={heroRef}>
      <HeroLink href={`/posts/${ slug }`}>
        <PostHeader category={category} title={title} hero />
        <PostLead lead={lead} hero />
        <PostFooter date={date} hero />
      </HeroLink>
    </Container>
  )
}
