import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../../utils/getGutter'
import Container from '../Common/Container'

const StyledPostContent = styled.div`
  ul {
    margin: ${ getGutter(0, 0, 0, 8) };
    
    li {
      list-style: initial;
    }
  }
`

export default function PostContent({ content }) {
  return (
    <Container
      as={StyledPostContent}
      width='md'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
