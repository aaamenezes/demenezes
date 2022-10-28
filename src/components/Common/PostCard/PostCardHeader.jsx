import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import LinkButton from '../LinkButton'

const CategoryText = styled.p`
  font-size: ${ ({ theme }) => theme.fontSize.small };
`

const PostCardTitle = styled.h3`
  ${ getBreakpoints({
    xs: css`
      display: inline-block;
      margin: ${ ({ theme, hero }) => hero ? `${ theme.spacing.h3 }rem 0` : 0 };
      font-size: ${ ({ theme, isCompact }) => (
    isCompact ? theme.fontSize.text : theme.fontSize.h3
  ) };
      font-weight: ${ ({ theme, isCompact }) => (
    isCompact ? theme.fontWeight.h4 : theme.fontWeight.h3
  ) };
      line-height: ${ ({ theme, isCompact }) => (
    isCompact ? theme.lineHeight.h4 : theme.lineHeight.h3
  ) };
      letter-spacing: ${ ({ theme, isCompact }) => (
    isCompact ? theme.letterSpacing.h4 : theme.letterSpacing.h3
  ) };
      background-image: ${ ({ theme }) => (
    `linear-gradient(
          120deg,
          ${ theme.color.red_900 } 0%,
          ${ theme.color.red_500 } 100%
        )`
  ) };
      background-repeat: no-repeat;
      background-size: 100% 0;
      background-position: 0 100%;
      transition: ${ ({ theme }) => theme.transition.fast };

      a {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        letter-spacing: inherit;
        transition: ${ ({ theme }) => theme.transition.fast };
      }

      &:hover {
        background-size: 100% 108%;

        a {
          color: ${ ({ theme }) => theme.color.neutral_100 };
        }
      }
    `,
    md: css`
      background-size: 100% 0.2rem;
    `
  }) }
`

const PostCardTitleLink = styled.a`
  padding: 0.5rem;
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
        <LinkButton as={PostCardTitleLink} href={`/posts/${ slug }`}>
          {title}
        </LinkButton>
      </PostCardTitle>
    </header>
  )
}
