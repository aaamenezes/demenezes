import React from 'react'
import styled, { css } from 'styled-components'
import { convertDate } from '../../../utils/convertDate'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'

const PostCardFooterWrapper = styled.footer`
  ${ getBreakpoints({
    xs: css`
      margin-top: ${ getGutter(2) };
    `,
    md: css`
      margin-top: 0;
    `
  }) }
`

const PostCardDate = styled.p`
  font-size: ${ ({ theme }) => theme.fontSize.small };
  color: ${ ({ theme }) => theme.color.gray8 };
`

export default function PostCardFooter({ date, hero }) {
  return (
    <PostCardFooterWrapper hero={hero}>
      <PostCardDate hero={hero}>
        {convertDate(date)}
      </PostCardDate>
    </PostCardFooterWrapper>
  )
}
