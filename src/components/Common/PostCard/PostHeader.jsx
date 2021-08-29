import React from 'react'
import styled from 'styled-components'

const PostCategory = styled.p`
  color: ${ ({ theme }) => theme.color.white };
`

const PostTitle = styled.h3`
  color: ${ ({ theme, hero }) => (
    hero ? theme.color.white : theme.color.blackAlt
  ) };
`

export default function PostHeader({ category, title, hero }) {
  return (
    <header>
      {
        hero && (
          <PostCategory>
            {category}
          </PostCategory>
        )
      }
      <PostTitle hero={hero}>
        {title}
      </PostTitle>
    </header>
  )
}
