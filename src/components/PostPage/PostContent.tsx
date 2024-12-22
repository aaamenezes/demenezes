import React, { useEffect } from 'react'
import Prism from 'prismjs'
import styled from 'styled-components'
import Container from '../Common/Container'
import StructuredTextDatoCMS from './StructuredTextDatoCMS'
import { PostProps, PostSummary } from '../../types'

const StyledPostContent = styled.article`
  overflow: hidden;
`

export default function PostContent({ post }: { post: PostProps}) {
  useEffect(() => {
    Prism.highlightAll()
  }, [ post ])

  return (
    <Container as={StyledPostContent} width='lg' spacing={0}>
      <StructuredTextDatoCMS data={post.data.post.content} />
    </Container>
  )
}
