import React from 'react'
import Container from '../Common/Container'

export default function PostContent({ content }) {
  return (
    <Container width='lg' dangerouslySetInnerHTML={{ __html: content }} />
  )
}
