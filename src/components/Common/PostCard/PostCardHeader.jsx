import React from 'react'
import styled from 'styled-components'
import LinkButton from '../LinkButton'

const PostCardHeaderWrapper = styled.header``
const PostCardCategory = styled.p``
const PostCardTitle = styled.h3``

export default function PostCardHeader({ post, hero }) {
  const { category, slug, title } = post

  return (
    <PostCardHeaderWrapper>
      {
        hero && (
          <PostCardCategory>
            {category}
          </PostCardCategory>
        )
      }
      <PostCardTitle hero={hero}>
        <LinkButton href={`/posts/${ slug }`}>
          {title}
        </LinkButton>
      </PostCardTitle>
    </PostCardHeaderWrapper>
  )
}
