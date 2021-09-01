import React from 'react'
import styled from 'styled-components'
import LinkButton from '../LinkButton'

const PostCardHeaderWrapper = styled.header``
const PostCardCategory = styled.p``
const PostCardTitle = styled.h3`
  display: inline-block;
  background-image: ${ ({ theme }) => (
    `linear-gradient(
      120deg,
      ${ theme.color.red } 0%,
      ${ theme.color.red5 } 100%
    )`
  ) };
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 108%;
  transition: ${ ({ theme }) => theme.transition.fast };

  &:hover {
    color: ${ ({ theme }) => theme.color.white };
    background-size: 100% 108%;
  }
`

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
