import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'
import PostCardFooter from './PostCardFooter'
import PostCardHeader from './PostCardHeader'
import PostCardDescription from './PostCardDescription'

const PostCardInfosWrapper = styled.div`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: ${ ({ hero }) => hero ? '100%' : 'initial' };
      padding: ${ getGutter(2, 0, 7) };
      color: ${ ({ theme, hero }) => (
    hero ? theme.color.gray : theme.color.black
  ) };
    `,
    md: css`
      width: ${ ({ hero }) => hero ? '50%' : '62%' };
      padding: 0;
      margin-left: auto;
    `
  }) }
`

export default function PostCardInfos({ post, hero }) {
  const { date, description } = post

  return (
    <PostCardInfosWrapper hero={hero}>
      <PostCardHeader post={post} hero={hero} />
      <PostCardDescription description={description} hero={hero} />
      <PostCardFooter date={date} />
    </PostCardInfosWrapper>
  )
}
