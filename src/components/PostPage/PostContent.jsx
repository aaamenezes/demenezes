import React from 'react'
import styled from 'styled-components'
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

  // Aqui tbm vai a classe do componente de código do Github Gist e vídeos
  p:not(:first-child):not(:last-child),
  ul:not(:first-child):not(:last-child) {
    margin-top: ${ ({ theme }) => `${ theme.spacing.text }rem` };
    margin-bottom: ${ ({ theme }) => `${ theme.spacing.text }rem` };
  }

  img:not(:first-child):not(:last-child) {
    margin-top: ${ ({ theme }) => `${ theme.spacing.h1 }rem` };
    margin-bottom: ${ ({ theme }) => `${ theme.spacing.h1 }rem` };
  }

  ul {
    margin-left: 2rem;
    
    li {
      list-style: initial;
    }
  }
`

export default function PostContent({ content }) {
  return (
    <Container
      as={StyledPostContent}
      width='lg'
      spacing='0'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
