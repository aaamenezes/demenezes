import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'

const Crop = styled.div`
  position: relative;
  height: 0;
  padding-top: ${ ({ width, height }) => `${ (height / width) * 100 }%` };
  overflow: hidden;
`

const Image = styled.img`
 ${ getBreakpoints({
    xs: css`
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: ${ ({ theme, highLight }) => (
    highLight ? `brightness(${ theme.opacity.medium.rgb })` : 'initial'
  ) };
    `
  }) }
`

export default function CropedImage({ src, alt, ratio, highLight }) {
  const [ width, height ] = ratio.indexOf('x') > -1
    ? ratio.split('x')
    : [ '1', '1' ]

  return (
    <Crop width={width} height={height}>
      <Image src={src} alt={alt} highLight={highLight} />
    </Crop>
  )
}
