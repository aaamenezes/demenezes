import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'

const PostLeadWrapper = styled.p`
  ${ getBreakpoints({
    xs: css`
      display: ${ ({ hero }) => hero ? 'block' : 'none' };
      color: ${ ({ theme, hero }) => (
    hero ? theme.color.white : theme.color.blackAlt
  ) };
    `,
    md: css`
      display: block;
    `
  }) }
`

export default function PostLead({ lead, hero }) {
  return (
    <PostLeadWrapper hero={hero}>
      {lead}
    </PostLeadWrapper>
  )
}
