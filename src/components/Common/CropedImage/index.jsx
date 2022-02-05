import React from 'react'
import styled from 'styled-components'

const Crop = styled.div`
  position: relative;
  display: contents;
  height: 0;
  padding-top: ${ ({ aspectRatio }) => aspectRatio };
  overflow: hidden;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${ ({ theme, highLight }) => (
    highLight ? `brightness(${ theme.opacity.medium.rgb })` : 'initial'
  ) };
`

export default function CropedImage({ src, alt, ratio, highLight }) {
  const [ width, height ] = ratio.indexOf('x') > -1
    ? ratio.split('x')
    : [ '1', '1' ]

  const aspectRatio = `${ (height / width) * 100 }%`

  return (
    <Crop aspectRatio={aspectRatio}>
      <Image src={src} alt={alt} highLight={highLight} />
    </Crop>
  )
}
