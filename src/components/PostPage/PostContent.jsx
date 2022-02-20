import React, { useEffect } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import { MDXRemote } from 'next-mdx-remote'
import Container from '../Common/Container'

const StyledPostContent = styled.div`
  h2 {
    margin-top: ${ ({ theme }) => `${ theme.spacing.h2 * 3 }rem` };
    margin-bottom: ${ ({ theme }) => `${ theme.spacing.h2 }rem` };
  }

  h3 {
    margin-top: ${ ({ theme }) => `${ theme.spacing.h3 * 3 }rem` };
    margin-bottom: ${ ({ theme }) => `${ theme.spacing.h3 }rem` };
  }

  h4 {
    margin-top: ${ ({ theme }) => `${ theme.spacing.h4 * 3 }rem` };
    margin-bottom: ${ ({ theme }) => `${ theme.spacing.h4 }rem` };
  }

  p:not(:first-child):not(:last-child),
  ul:not(:first-child):not(:last-child) {
    margin-top: ${ ({ theme }) => `${ theme.spacing.text }rem` };
    margin-bottom: ${ ({ theme }) => `${ theme.spacing.text }rem` };
  }

  img:not(:first-child):not(:last-child),
  iframe:not(:first-child):not(:last-child),
  pre[class*="language-"]:not(:first-child):not(:last-child) {
    margin-top: ${ ({ theme }) => `${ theme.spacing.h1 }rem` };
    margin-bottom: ${ ({ theme }) => `${ theme.spacing.h1 }rem` };
  }

  pre[class*="language-"] {
    padding: 2rem;
  }

  code {
    padding: 0.3rem;
    color: ${ ({ theme }) => theme.color.white };
    background-color: rgb(30, 30, 30);
  }

  ul {
    margin-left: 2rem;
    
    li {
      list-style: initial;
    }
  }
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
