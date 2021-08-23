import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'
import Container from '../Container'
import CropedImage from '../CropedImage'

const PostCardWrapper = styled.article`
  ${ getBreakpoints({
    xs: css`
      position: relative;
      padding-top: ${ ({ highLight }) => highLight ? 0 : getGutter(5) };
      padding-bottom: ${ ({ highLight }) => highLight ? 0 : getGutter(5) };
      padding-left: ${ ({ highLight }) => highLight && 0 };
      padding-right: ${ ({ highLight }) => highLight && 0 };
    `,
    md: css`
      padding-top: ${ getGutter(5) };
      padding-bottom: ${ getGutter(5) };
      padding-left: 0;
      padding-right: 0;
    `
  }) }
`

const PostCardLink = styled.a`
  display: block;
`

const PostCardTStripe = styled.div`
  ${ getBreakpoints({
    xs: css`
      position: absolute;
      z-index: ${ ({ theme }) => theme.zIndex.absolute };
      top: ${ ({ highLight }) => highLight ? 0 : getGutter(5) };
      left: ${ ({ highLight }) => highLight ? 0 : '5%' };
      width: ${ ({ highLight }) => highLight ? '100%' : '90%' };
      padding: ${ getGutter(2, 3) };
      color: ${ ({ theme }) => theme.color.white };
      background-color: ${ ({ theme }) => theme.color.red };
    `,
    md: css`
      top: ${ getGutter(5) };
      left: 0;
      width: 100%;
    `
  }) }
`

const PostCardLabel = styled.div`
  ${ getBreakpoints({
    xs: css`
      position: absolute;
      z-index: ${ ({ theme }) => theme.zIndex.absolute };
      top: ${ ({ highLight }) => highLight ? 0 : getGutter(5) };
      right: ${ ({ highLight }) => highLight ? 0 : '5%' };
      padding: ${ getGutter(2, 3) };
      color: ${ ({ theme }) => theme.color.white };
      background-color: ${ ({ theme }) => theme.color.red };
    `,
    md: css`
      top: ${ getGutter(5) };
      right: 0;
    `
  }) }
`

const PostCardTitle = styled.h3`
  ${ getBreakpoints({
    xs: css`
      position: ${ ({ highLight }) => highLight ? 'absolute' : 'initial' };
      bottom: ${ ({ highLight }) => highLight ? getGutter(3) : 'initial' };
      padding: ${ ({ highLight }) => (
    highLight ? getGutter(0, '5%') : 'initial'
  ) };
      marginTop: ${ getGutter(5) };
      color: ${ ({ theme, highLight }) => (
    highLight ? theme.color.white : theme.color.black
  ) };
    `,
    md: css`
      position: initial;
      bottom: initial;
      padding: initial;
      color: ${ ({ theme }) => theme.color.black };
    `
  }) }
`

export default function PostCard({
  postLink,
  title,
  imageURL,
  imageAlt,
  imageRatio,
  index
}) {
  const highLight = Number.isInteger((index + 1) / 3) && index !== 0

  return (
    <Container as={PostCardWrapper} highLight={highLight}>
      <PostCardLink href={postLink}>
        <PostCardTStripe highLight={highLight} />
        <PostCardLabel highLight={highLight}>
          <span>PROPS.CATEGORIA</span>
        </PostCardLabel>
        <CropedImage
          src={imageURL}
          alt={imageAlt}
          ratio={imageRatio}
          highLight={highLight}
        />
        <PostCardTitle highLight={highLight}>{title}</PostCardTitle>
      </PostCardLink>
    </Container>
  )
}
