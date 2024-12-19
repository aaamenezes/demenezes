import React from 'react'
import NextImage from 'next/image'
import styled, { css } from 'styled-components'
import Container from './Container'
import LinkButton from './LinkButton'
import PostCardInfos from './PostCardInfos'
import Label from './Label'
import getBreakpoints from '../../utils/getBreakpoints'

const PostCardWrapper = styled.article`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      padding: ${ ({ isCompact }) => isCompact ? '1rem' : '1rem' };
      transition: box-shadow ${ ({ theme }) => theme.transition.fast };
      box-shadow: 0 0 2rem -1rem ${ ({ theme }) => theme.color.neutral_800 };
    `,
    sm: css`
      padding: ${ ({ isCompact }) => isCompact ? '1rem' : '2rem' };
    `,
    md: css`
      flex-direction: ${ ({ isCompact }) => isCompact ? 'column' : 'row' };
      justify-content: ${ ({ isCompact }) => (
    isCompact ? 'flex-start' : 'space-between'
  ) };
      padding: ${ ({ isCompact }) => isCompact ? '1rem' : '3rem' };
      box-shadow: none;

      &:hover {
        box-shadow: 0 0 2rem -1rem ${ ({ theme }) => theme.color.neutral_800 };
      }
    `,
    lg: css`
      padding: ${ ({ isCompact }) => isCompact ? '1rem' : '4rem' };
    `
  }) }
`

const PostCardImageWrapper = styled.div`
  ${ getBreakpoints({
    xs: css`
      position: relative;
      width: 100%;
      margin-bottom: 1rem;
    `,
    md: css`
      width: ${ ({ isCompact }) => isCompact ? '100%' : '35%' };
      margin-bottom: ${ ({ isCompact }) => isCompact ? '1rem' : '0' };
      overflow: hidden;
    `
  }) }
`

const PostCardImageLink = styled.a`
  position: relative;
`

export default function PostCard({ post, isCompact, spacing }) {
  const { title, slug, thumbnail, category } = post
  const { width, height } = thumbnail
  const { src } = thumbnail.responsiveImage

  return (
    <Container
      as={PostCardWrapper}
      width='xl'
      spacing={typeof +spacing === 'number' ? +spacing : 7}
      isCompact={isCompact}
    >
      <PostCardImageWrapper isCompact={isCompact} aria-hidden='true'>
        <LinkButton
          href={`/posts/${ slug }`}
          as={PostCardImageLink}
          tabIndex='-1'
        >
          <NextImage
            src={src}
            alt={`Imagem de capa do post: ${ title }`}
            width={width}
            height={height}
            sizes='(max-width: 767px) 100vw, 30vw'
            style={{
              aspectRatio: '4 / 3',
              objectFit: 'cover'
            }}
          />
          <Label>
            {category}
          </Label>
        </LinkButton>
      </PostCardImageWrapper>
      <PostCardInfos post={post} isCompact={isCompact} />
    </Container>
  )
}
