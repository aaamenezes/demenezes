import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../../../utils/getGutter'
import Container from '../Container'
import CropedImage from '../CropedImage'

const PostCardWrapper = styled.article`
  position: relative;
`

const PostCardLabel = styled.div`
  position: absolute;
  z-index: ${ ({ theme }) => theme.zIndex.absolute };
  top: ${ getGutter(1) };
  right: calc(5% + ${ getGutter(1) });
  color: ${ ({ theme }) => theme.color.white };
  background-color: ${ ({ theme }) => theme.color.red };
`

export default function PostCard({ title, imageURL, imageAlt, imageRatio }) {
  return (
    <Container as={PostCardWrapper}>
      <PostCardLabel>
        <span>props.CATEGORIA</span>
      </PostCardLabel>
      <CropedImage src={imageURL} alt={imageAlt} ratio={imageRatio} />
      <h3>{title}</h3>
    </Container>
  )
}
