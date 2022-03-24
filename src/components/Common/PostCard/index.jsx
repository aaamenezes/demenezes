import React from 'react'
import styled, { css } from 'styled-components'
import Container from '../Container'
import CropedImage from '../CropedImage'
import LinkButton from '../LinkButton'
import PostCardInfos from './PostCardInfos'
import getBreakpoints from '../../../utils/getBreakpoints'

const PostCardWrapper = styled.article`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      padding: 1rem;
      transition: box-shadow ${ ({ theme }) => theme.transition.fast };
      box-shadow: 0 0 2rem -1rem ${ ({ theme }) => theme.color.neutral_800 };
    `,
    sm: css`
      padding: 2rem;
    `,
    md: css`
      flex-direction: ${ ({ isCompact }) => isCompact ? 'column' : 'row' };
      justify-content: space-between;
      padding: 3rem;
      box-shadow: none;

      &:hover {
        box-shadow: 0 0 2rem -1rem ${ ({ theme }) => theme.color.neutral_800 };
      }
    `,
    lg: css`
      padding: 4rem;
    `
  }) }
`

const PostCardImage = styled.div`
  ${ getBreakpoints({
    xs: css`
      position: relative;
      width: 100%;
      margin-bottom: 0.66rem;
    `,
    md: css`
      width: ${ ({ isCompact }) => isCompact ? '100%' : '35%' };
      margin-bottom: 0;
      overflow: hidden;
    `
  }) }
`

const PostCardLabel = styled.div`
  position: absolute;
  z-index: ${ ({ theme }) => theme.zIndex.absolute };
  top: 70%;
  left: 0;
  padding: 0.44rem 0.66rem;
  line-height: ${ ({ theme }) => theme.lineHeight.button };
  font-size: ${ ({ theme }) => theme.fontSize.small };
  letter-spacing: ${ ({ theme }) => theme.letterSpacing.button };
  color: ${ ({ theme }) => theme.color.neutral_100 };
  background-color: ${ ({ theme }) => theme.color.red_700 };
`

export default function PostCard({
  post,
  imageRatio,
  width,
  isCompact,
  spacing
}) {
  const { title, slug, thumbnail, category } = post
  const imageSrc = thumbnail.responsiveImage.srcSet
    .split(',')[0]
    .split(' ')[0]

  return (
    <Container
      as={PostCardWrapper}
      width={width || 'xl'}
      spacing={spacing || '7'}
      isCompact={isCompact}
    >
      <PostCardImage isCompact={isCompact}>
        <LinkButton href={`/posts/${ slug }`}>
          <CropedImage
            src={imageSrc}
            alt={`Imagem de capa do post: ${ title }`}
            ratio={imageRatio}
          />
          <PostCardLabel>
            {category}
          </PostCardLabel>
        </LinkButton>
      </PostCardImage>
      <PostCardInfos post={post} isCompact={isCompact} />
    </Container>
  )
}
