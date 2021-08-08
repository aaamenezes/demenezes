import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../../../utils/getGutter'
import Container from '../Container'
import CropedImage from '../CropedImage'

const PostCardWrapper = styled.article`
  position: relative;
  margin-bottom: ${ getGutter('30') };
`

const PostCardLink = styled.a`
  display: block;
`

const PostCardTStripe = styled.div`
  position: absolute;
  z-index: ${ ({ theme }) => theme.zIndex.absolute };
  top: 0;
  left: 5%;
  width: 90%;
  padding: ${ getGutter(2, 3) };
  color: ${ ({ theme }) => theme.color.white };
  background-color: ${ ({ theme }) => theme.color.red };
`

const PostCardLabel = styled.div`
  position: absolute;
  z-index: ${ ({ theme }) => theme.zIndex.absolute };
  top: 0;
  right: 5%;
  padding: ${ getGutter(2, 3) };
  color: ${ ({ theme }) => theme.color.white };
  background-color: ${ ({ theme }) => theme.color.red };
`

const PostCardTitle = styled.h3`
  padding: ${ getGutter(5, 0) };
`

export default function PostCard({
  postLink,
  title,
  imageURL,
  imageAlt,
  imageRatio
}) {
  return (
    <Container as={PostCardWrapper}>
      <PostCardLink href={postLink}>
        <PostCardTStripe />
        <PostCardLabel>
          <span>PROPS.CATEGORIA</span>
        </PostCardLabel>
        <CropedImage src={imageURL} alt={imageAlt} ratio={imageRatio} />
        <PostCardTitle>{title}</PostCardTitle>
      </PostCardLink>
    </Container>
  )
}
