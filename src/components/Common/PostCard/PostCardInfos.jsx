import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'
import PostCardFooter from './PostCardFooter'
import PostCardHeader from './PostCardHeader'
import PostCardLead from './PostCardLead'

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
  const { date, lead } = post

  return (
    <PostCardInfosWrapper hero={hero}>
      <PostCardHeader post={post} hero={hero} />
      <PostCardLead lead={lead} hero={hero} />
      <PostCardFooter date={date} />
    </PostCardInfosWrapper>
  )
}
