import React, { useEffect } from 'react'
import Prism from 'prismjs'
import styled from 'styled-components'
import Container from '../Common/Container'
import StructuredTextDatoCMS from './StructuredTextDatoCMS'

const StyledPostContent = styled.div`
  overflow: hidden;
`

export default function PostContent({ post }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [ post ])

  return (
    <Container as={StyledPostContent} width='xl' spacing='0'>
      <StructuredTextDatoCMS data={post.data.post.content} />
    </Container>
  )
}
