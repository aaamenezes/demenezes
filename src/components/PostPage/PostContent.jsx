import React from 'react'
import styled from 'styled-components'
import { getWidth } from '../../utils/getWidth'
import Container from '../Common/Container'

const StyledPostContent = styled.div`
  max-width: ${ getWidth('xl') };
`

export default function PostContent({ content }) {
  return (
    <Container
      dangerouslySetInnerHTML={{ __html: content }}
      as={StyledPostContent}
    />
  )
}
