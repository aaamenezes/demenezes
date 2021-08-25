import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'
import Container from '../Container'
import CropedImage from '../CropedImage'

const PostCardWrapper = styled.article`
  ${ getBreakpoints({
    xs: css`
      padding-left: ${ ({ highLight }) => highLight && 0 };
      padding-right: ${ ({ highLight }) => highLight && 0 };
      margin-bottom: 15%;
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

      &:hover {
        box-shadow: ${ ({ theme }) => (
    `${ getGutter(0, 0, 4, -1) } ${ theme.color.blackAlt }`
  ) };
      }
    `,
    sm: css`
      flex-direction: row;
    `
  }) }
`

const ImageWrapper = styled.div`
  ${ getBreakpoints({
    sm: css`
      position: relative;
      width: ${ ({ highLight }) => highLight ? '100%' : '50%' };
      max-width: ${ ({ highLight }) => !highLight && getGutter(125) };
      max-height: ${ ({ highLight }) => highLight && getGutter(125) };
      margin-right: ${ ({ highLight }) => highLight ? 0 : '2%' };
      overflow: ${ ({ highLight }) => highLight && 'hidden' };
    `
  }) }
`

const PostCardTStripe = styled.div`
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

const InfosWrapper = styled.div`
  ${ getBreakpoints({
    xs: css`
      position: ${ ({ highLight }) => highLight ? 'absolute' : 'initial' };
      top: ${ ({ highLight }) => highLight ? getGutter(10) : 'initial' };
      padding: ${ ({ highLight }) => (
    highLight ? getGutter(0, '5%') : getGutter(5, 0)
  ) };
      color: ${ ({ theme, highLight }) => (
    highLight ? theme.color.white : theme.color.black
  ) };
    `,
    md: css`
      
    `
  }) }
`

const PostCardTitle = styled.h3`
  ${ getBreakpoints({
    xs: css`
      
    `,
    md: css`
      
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
        <ImageWrapper highLight={highLight}>
          <CropedImage
            src={imageURL}
            alt={imageAlt}
            ratio={imageRatio}
            highLight={highLight}
          />
          <PostCardTStripe highLight={highLight} />
          <PostCardLabel highLight={highLight}>
            <span>PROPS.CATEGORIA</span>
          </PostCardLabel>
        </ImageWrapper>
        <InfosWrapper highLight={highLight}>
          <PostCardTitle highLight={highLight}>{title}</PostCardTitle>
        </InfosWrapper>
      </PostCardLink>
    </Container>
  )
}
