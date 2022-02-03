import React from 'react'
import Container from '../Common/Container'

export default function PostContent({ content }) {
  return (
    <Container width='md' dangerouslySetInnerHTML={{ __html: content }} />
  )
}
