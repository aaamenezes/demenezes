import React from 'react'
import styled, { css } from 'styled-components'
import { convertDate } from '../../../utils/convertDate'
import getBreakpoints from '../../../utils/getBreakpoints'

const PostCardFooterWrapper = styled.footer`
  ${ getBreakpoints({
    xs: css`
      margin-top: 0.44rem;
      padding: 0.5rem;
    `,
    md: css`
      margin-top: ${ ({ isCompact }) => isCompact ? '0.44rem' : 0 };
    `
  }) }
`

const PostCardDate = styled.p`
  font-size: ${ ({ theme }) => theme.fontSize.small };
  letter-spacing: ${ ({ theme }) => theme.letterSpacing.button };
  color: ${ ({ theme }) => theme.color.neutral_600 };
`

export default function PostCardFooter({ date, isCompact }) {
  if (!date) return null

  return (
    <PostCardFooterWrapper isCompact={isCompact}>
      <PostCardDate>
        {convertDate(date)}
      </PostCardDate>
    </PostCardFooterWrapper>
  )
}
