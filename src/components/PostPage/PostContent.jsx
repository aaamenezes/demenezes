import React, { useEffect } from 'react'
import Prism from 'prismjs'
import { MDXRemote } from 'next-mdx-remote'
import styled from 'styled-components'
import Container from '../Common/Container'

const StyledPostContent = styled.div`
  overflow: hidden;
`

export default function PostContent({ mdxContent, components }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [ mdxContent ])

  return (
    <Container
      as={StyledPostContent}
      width='lg'
      spacing='0'
      // dangerouslySetInnerHTML={{ __html: content }}
    >
      <MDXRemote {...mdxContent} components={components} />
    </Container>
  )
}
