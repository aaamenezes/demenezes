import React from 'react'
import styled from 'styled-components'

const PostBody = styled.div`
  p {
    margin-bottom: 20px;
  }

  h2 {
    margin: 50px 0 20px;
  }
`

export default function PostContent({ content }) {
  return <PostBody dangerouslySetInnerHTML={{ __html: content }} />
}
