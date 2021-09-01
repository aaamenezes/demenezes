import React from 'react'
import styled, { css } from 'styled-components'
import Container from '../Container'
import CropedImage from '../CropedImage'
import LinkButton from '../LinkButton'
import PostCardInfos from './PostCardInfos'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'

const PostCardWrapper = styled.article`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      padding: 0 10%;
      margin-bottom: 10%;
      `,
    md: css`
      flex-direction: row;
      justify-content: space-between;
    `
  }) }
`

const PostCardImage = styled.div`
  ${ getBreakpoints({
    xs: css`
      position: relative;
      width: 100%;
    `,
    md: css`
      width: 35%;
      overflow: hidden;
    `
  }) }
`

const PostCardStripe = styled.div`
  ${ getBreakpoints({
    xs: css`
      position: absolute;
      z-index: ${ ({ theme }) => theme.zIndex.absolute };
      top: 0;
      left: 0;
      width: 100%;
      padding: ${ getGutter(2, 3) };
      color: ${ ({ theme }) => theme.color.white };
      background-color: ${ ({ theme }) => theme.color.red };
    `
  }) }
`

const PostCardLabel = styled.div`
  ${ getBreakpoints({
    xs: css`
      position: absolute;
      z-index: ${ ({ theme }) => theme.zIndex.absolute };
      top: 0;
      right: 0;
      padding: ${ getGutter(2, 3) };
      color: ${ ({ theme }) => theme.color.white };
      background-color: ${ ({ theme }) => theme.color.red };
      font-size: ${ ({ theme }) => theme.fontSize.small };
    `
  }) }
`

export default function PostCard({ post, imageRatio, heroRef }) {
  const { title, slug, coverImage, category } = post

  return (
    <Container as={PostCardWrapper} ref={heroRef}>
      <PostCardImage>
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
      <PostCardInfos post={post} />
    </Container>
  )
}
