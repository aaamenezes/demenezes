import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'

const PostCardLeadWrapper = styled.p`
  ${ getBreakpoints({
    xs: css`
      display: ${ ({ hero }) => hero ? 'block' : 'none' };
      margin: ${ getGutter(5, 0) };
    `,
    md: css`
      display: block;
    `
  }) }
`

export default function PostCardLead({ lead, hero }) {
  return (
    <PostCardLeadWrapper hero={hero}>
      {lead}
    </PostCardLeadWrapper>
  )
}
