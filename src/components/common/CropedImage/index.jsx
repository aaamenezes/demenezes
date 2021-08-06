import React from 'react'
import styled from 'styled-components'

const Crop = styled.div`
  position: relative;
  height: 0;
  padding-top: ${ ({ width, height }) => `${ (height / width) * 100 }%` };
  overflow: hidden;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default function CropedImage({ src, alt, ratio }) {
  if (ratio.indexOf('x') === -1) return null

  const [ width, height ] = ratio.split('x')

  return (
    <Crop width={width} height={height}>
      <Image src={src} alt={alt} />
    </Crop>
  )
}
