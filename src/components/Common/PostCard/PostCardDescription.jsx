import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'

const PostCardDescriptionWrapper = styled.p`
  ${ getBreakpoints({
    xs: css`
      display: ${ ({ hero }) => hero ? 'block' : 'none' };
      padding: 0.5rem;
      margin: 1.1rem 0;
    `,
    md: css`
      display: ${ ({ isCompact }) => isCompact ? 'none' : 'block' };
    `
  }) }
`

export default function PostCardDescription({ description, hero, isCompact }) {
  return (
    <PostCardDescriptionWrapper hero={hero} isCompact={isCompact}>
      {description}
    </PostCardDescriptionWrapper>
  )
}
