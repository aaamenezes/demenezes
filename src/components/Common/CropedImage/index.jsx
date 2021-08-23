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
    `,
    md: css`
      filter: initial;
    `
  }) }
  
`

export default function CropedImage({ src, alt, ratio, highLight }) {
  if (ratio.indexOf('x') === -1) return null

  const [ width, height ] = ratio.split('x')

  return (
    <Crop width={width} height={height}>
      <Image src={src} alt={alt} highLight={highLight} />
    </Crop>
  )
}
