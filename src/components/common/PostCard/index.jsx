import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../../../utils/getGutter'
import Container from '../Container'
import CropedImage from '../CropedImage'

const PostCardWrapper = styled.article`
  ${ ({ highLight }) => ({
    position: 'relative',
    paddingTop: highLight ? 0 : getGutter(5),
    paddingBottom: highLight ? 0 : getGutter(5),
    paddingLeft: (highLight && 0),
    paddingRight: (highLight && 0)
  }) }
`

const PostCardLink = styled.a`
  display: block;
`

const PostCardTStripe = styled.div`
  ${ ({ theme, highLight }) => ({
    position: 'absolute',
    zIndex: theme.zIndex.absolute,
    top: highLight ? 0 : getGutter(5),
    left: highLight ? 0 : '5%',
    width: highLight ? '100%' : '90%',
    padding: getGutter(2, 3),
    color: theme.color.white,
    backgroundColor: theme.color.red
  }) }
`

const PostCardLabel = styled.div`
  ${ ({ theme, highLight }) => ({
    position: 'absolute',
    zIndex: theme.zIndex.absolute,
    top: highLight ? 0 : getGutter(5),
    right: highLight ? 0 : '5%',
    padding: getGutter(2, 3),
    color: theme.color.white,
    backgroundColor: theme.color.red
  }) }
`

const PostCardTitle = styled.h3`
  ${ ({ theme, highLight }) => ({
    position: highLight ? 'absolute' : 'initial',
    bottom: highLight ? getGutter(3) : 'initial',
    padding: highLight ? getGutter(0, '5%') : 'initial',
    marginTop: getGutter(5),
    color: highLight ? theme.color.white : theme.color.black
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
