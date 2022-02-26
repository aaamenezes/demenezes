import React from 'react'
import styled from 'styled-components'
import LinkButton from '../LinkButton'

const CategoryText = styled.p`
  font-size: ${ ({ theme }) => theme.fontSize.small };
`

const PostCardTitle = styled.h3`
  display: inline-block;
  margin: ${ ({ theme, hero }) => hero ? `${ theme.spacing.h3 }rem 0` : 0 };
  font-size: ${ ({ theme, isCompact }) => isCompact && theme.fontSize.h4 };
  background-image: ${ ({ theme }) => (
    `linear-gradient(
      120deg,
      ${ theme.color.red_900 } 0%,
      ${ theme.color.red_500 } 100%
    )`
  ) };
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 108%;
  transition: ${ ({ theme }) => theme.transition.fast };

  &:hover {
    color: ${ ({ theme }) => theme.color.neutral_100 };
    background-size: 100% 108%;
  }
`

export default function PostCardHeader({ post, hero, isCompact }) {
  const { category, slug, title } = post

  return (
    <header>
      {
        hero && (
          <CategoryText>
            {category}
          </CategoryText>
        )
      }
      <PostCardTitle hero={hero} isCompact={isCompact}>
        <LinkButton href={`/posts/${ slug }`}>
          {title}
        </LinkButton>
      </PostCardTitle>
    </header>
  )
}
