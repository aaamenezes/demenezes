import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'

function insertSizeInPath(src, imageWidth) {
  const [ filePathName, fileExtension ] = src.split('.')
  return `${ filePathName }-${ imageWidth }.${ fileExtension }`
}

function getSourceTag(entry, src, breakpoints) {
  const [ key, value ] = entry
  const imageWidth = breakpoints[key]
  const srcSet = insertSizeInPath(src, imageWidth)

  return (
    <source
      key={value}
      media={`(max-width:${ value }px)`}
      srcSet={srcSet}
    />
  )
}

const Picture = styled.picture`
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  max-width: 112%;
  margin: 0 -6%;
`

export default function Image({ src, alt }) {
  const { breakpoints } = theme
  const sources = Object.entries(breakpoints)
    .slice(1, 4)
    .map(entry => getSourceTag(entry, src, breakpoints))

  return (
    <Picture>
      {sources}
      <Img src={insertSizeInPath(src, '1200')} alt={alt} loading='lazy' />
    </Picture>
  )
}
