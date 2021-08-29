import React from 'react'
import styled, { css } from 'styled-components'
import Container from '../Container'
import CropedImage from '../CropedImage'
import LinkButton from '../LinkButton'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'
import PostLead from './PostLead'

const PostCardWrapper = styled.article`
  ${ getBreakpoints({
    xs: css`
      padding-left: ${ ({ highLight }) => highLight && 0 };
      padding-right: ${ ({ highLight }) => highLight && 0 };
      margin-bottom: 10%;
    `
  }) }
`

const PostCardLink = styled.a`
  ${ getBreakpoints({
    xs: css`
      position: relative;
      display: flex;
      flex-direction: column;
      transition: ${ ({ theme }) => theme.transition.fast };
    `,
    md: css`
      flex-direction: row;
    `
  }) }
`

const ImageWrapper = styled.div`
  ${ getBreakpoints({
    md: css`
      position: relative;
      width: ${ ({ highLight }) => highLight ? '100%' : '50%' };
      max-width: ${ ({ highLight }) => !highLight && getGutter(125) };
      margin-right: ${ ({ highLight }) => highLight ? 0 : '2%' };
      overflow: ${ ({ highLight }) => highLight && 'hidden' };
    `
  }) }
`

const PostStripe = styled.div`
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

const PostLabel = styled.div`
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

const InfosWrapper = styled.div`
  ${ getBreakpoints({
    xs: css`
      position: ${ ({ highLight }) => highLight ? 'absolute' : 'initial' };
      top: ${ ({ highLight }) => highLight ? getGutter(10) : 'initial' };
      flex: 1;
      padding: ${ ({ highLight }) => (
    highLight ? getGutter(0, '5%') : getGutter(2, 0, 7)
  ) };
      color: ${ ({ theme, highLight }) => (
    highLight ? theme.color.white : theme.color.black
  ) };
    `,
    md: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: ${ ({ highLight }) => (
    highLight ? getGutter(0, '5%') : 0
  ) };
    `
  }) }
`

// eslint-disable-next-line no-unused-vars
export default function PostCard({ post, imageRatio, index }) {
  const { title, date, slug, coverImage, lead, category } = post
  // const highLight = Number.isInteger((index + 1) / 3) && index !== 0
  const highLight = false

  return (
    <Container as={PostCardWrapper} highLight={highLight} padding='10%'>
      <LinkButton as={PostCardLink} href={`/posts/${ slug }`}>
        <ImageWrapper highLight={highLight}>
          <CropedImage
            src={coverImage}
            alt={`Imagem de capa do post: ${ title }`}
            ratio={imageRatio}
            highLight={highLight}
          />
          <PostStripe highLight={highLight} />
          <PostLabel highLight={highLight}>
            {category}
          </PostLabel>
        </ImageWrapper>
        <InfosWrapper highLight={highLight}>
          <PostHeader title={title} />
          <PostLead lead={lead} />
          <PostFooter category={category} date={date} />
        </InfosWrapper>
      </LinkButton>
    </Container>
  )
}
