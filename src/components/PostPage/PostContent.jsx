import React, { useEffect } from 'react'
import Prism from 'prismjs'
import { MDXRemote } from 'next-mdx-remote'
import Container from '../Common/Container'
import StyledTextBody from '../Common/StyledTextBody'

export default function PostContent({ mdxContent, components }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [ mdxContent ])

  return (
    <Container
      as={StyledTextBody}
      width='lg'
      spacing='0'
      // dangerouslySetInnerHTML={{ __html: content }}
    >
      <MDXRemote {...mdxContent} components={components} />
    </Container>
  )
}
