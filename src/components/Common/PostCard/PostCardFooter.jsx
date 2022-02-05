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
      margin-top: ${ ({ isCompact }) => isCompact ? getGutter(2) : 0 };
    `
  }) }
`

const PostCardDate = styled.p`
  font-size: ${ ({ theme }) => theme.fontSize.small };
  letter-spacing: ${ ({ theme }) => theme.letterSpacing.small };
  color: ${ ({ theme }) => theme.color.gray8 };
`

export default function PostCardFooter({ date, isCompact }) {
  return (
    date
      ? (
        <PostCardFooterWrapper isCompact={isCompact}>
          <PostCardDate>
            {convertDate(date)}
          </PostCardDate>
        </PostCardFooterWrapper>
      )
      : <></>
  )
}
