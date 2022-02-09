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
    `,
    md: css`
      flex-direction: ${ ({ isCompact }) => isCompact ? 'column' : 'row' };
      justify-content: space-between;
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

const PostCardStripe = styled.div`
  position: absolute;
  z-index: ${ ({ theme }) => theme.zIndex.absolute };
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.44rem 0.66rem;
  color: ${ ({ theme }) => theme.color.white };
  background-color: ${ ({ theme }) => theme.color.red };
`

const PostCardLabel = styled.div`
  position: absolute;
  z-index: ${ ({ theme }) => theme.zIndex.absolute };
  top: 0;
  right: 0;
  padding: 0.44rem 0.66rem;
  color: ${ ({ theme }) => theme.color.white };
  background-color: ${ ({ theme }) => theme.color.red };
  font-size: ${ ({ theme }) => theme.fontSize.small };
  letter-spacing: ${ ({ theme }) => theme.letterSpacing.small };
`

export default function PostCard({
  post,
  imageRatio,
  width,
  isCompact,
  spacing
}) {
  const { title, slug, coverImage, category } = post

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
            src={coverImage}
            alt={`Imagem de capa do post: ${ title }`}
            ratio={imageRatio}
          />
          <PostCardStripe />
          <PostCardLabel>
            {category}
          </PostCardLabel>
        </LinkButton>
      </PostCardImage>
      <PostCardInfos post={post} isCompact={isCompact} />
    </Container>
  )
}
