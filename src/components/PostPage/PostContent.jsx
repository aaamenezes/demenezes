import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import { getWidth } from '../../utils/getWidth'
import Container, { containerPadding } from '../Common/Container'

const StyledPostContent = styled.div`
  ${ getBreakpoints({
    xs: css`
      max-width: ${ getWidth('md') };
      padding-right: 0;
      padding-left: 0;
    `,
    md: css`
      padding-right: ${ containerPadding };
      padding-left: ${ containerPadding };
    `
  }) }
`

export default function PostContent({ content }) {
  return (
    <Container
      dangerouslySetInnerHTML={{ __html: content }}
      as={StyledPostContent}
    />
  )
}
