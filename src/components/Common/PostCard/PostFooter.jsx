import React from 'react'
import styled, { css } from 'styled-components'
import { convertDate } from '../../../utils/convertDate'
import getBreakpoints from '../../../utils/getBreakpoints'

const PostFooterWrapper = styled.footer`
  ${ getBreakpoints({
    xs: css`
      display: ${ ({ hero }) => hero ? 'block' : 'none' };
    `,
    md: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `
  }) }
`

const PostDate = styled.p`
  font-size: ${ ({ theme }) => theme.fontSize.small };
  color: ${ ({ theme, hero }) => (
    hero ? theme.color.white : theme.color.gray8
  ) };
`

export default function PostFooter({ date, hero }) {
  return (
    <PostFooterWrapper hero={hero}>
      <PostDate hero={hero}>
        {convertDate(date)}
      </PostDate>
    </PostFooterWrapper>
  )
}
