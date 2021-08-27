import React from 'react'
import styled, { css } from 'styled-components'
import { convertDate } from '../../../utils/convertDate'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'
import Container from '../../Common/Container'

const HeroWrapper = styled.article`
  ${ getBreakpoints({
    xs: css`
      height: 100vh;
      padding-top: ${ getGutter(30) };
      padding-bottom: ${ getGutter(10) };
      margin-bottom: 15%;
      color: ${ ({ theme }) => theme.color.white };
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
      ), url('${ post.coverImage }') ` };
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
    `,
    md: css`
      width: 50%;
      margin-left: auto;
    `
  }) }
`

const PostTitle = styled.h3``

const PostCardBody = styled.div``

const PostCategory = styled.p`
  margin-bottom: ${ getGutter(3) };
`

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${ getGutter(3) };
`

const TagItem = styled.li`
  padding: ${ getGutter(1) };
  border-radius: ${ ({ theme }) => theme.borderRadius };
  font-size: ${ ({ theme }) => theme.fontSize.small };
  background-color: ${ ({ theme }) => theme.color.red };

  &:not(:last-child) {
    margin-right: ${ getGutter(1) };
  }
`

const PostDate = styled.p`
  font-size: ${ ({ theme }) => theme.fontSize.small };
`

export default function HeroPostCard({ post, heroRef }) {
  const { title, date, mainTags, lead, category } = post

  const mainTagsElements = mainTags.map(tag => (
    <TagItem key={tag}>
      <p>{tag}</p>
    </TagItem>
  ))
  return (
    <Container as={HeroWrapper} post={post} ref={heroRef}>
      <HeroLink>
        <header>
          <PostTitle>{title}</PostTitle>
        </header>
        <PostCardBody>{lead}</PostCardBody>
        <footer>
          <PostCategory>{category}</PostCategory>
          <TagsList>{mainTagsElements}</TagsList>
          <PostDate>{convertDate(date)}</PostDate>
        </footer>
      </HeroLink>
    </Container>
  )
}
