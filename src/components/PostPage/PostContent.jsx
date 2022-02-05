import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'

const StyledPostContent = styled.div`
  ul {
    margin: 0 0 0 1.76rem;
    
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
