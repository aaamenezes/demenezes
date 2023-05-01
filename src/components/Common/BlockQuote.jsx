import React from 'react'
// eslint-disable-next-line import/no-cycle
import StructuredTextDatoCMS from '../PostPage/StructuredTextDatoCMS'

export default function BlockQuote({ source, children, author, isDatoCMS }) {
  return (
    <blockquote cite={source || ''}>
      {isDatoCMS ? <StructuredTextDatoCMS data={children} /> : children }
      {author && <footer>{author}</footer>}
    </blockquote>
  )
}
