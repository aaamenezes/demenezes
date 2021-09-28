import React from 'react'
import Container from '../Common/Container'

export default function PostContent({ content }) {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />
}
