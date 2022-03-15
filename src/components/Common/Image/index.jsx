import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'

function getSourceTag(entry, url) {
  const [ key, value ] = entry
  return (
    <source
      key={key}
      media={`(max-width:${ value }px)`}
      srcSet={url}
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

export default function Image({ src, alt, srcSet }) {
  const urlList = srcSet
    .split(',')
    .map(size => size.split(' ')[0])

  const { breakpoints } = theme
  const sources = Object.entries(breakpoints)
    .slice(1, 4)
    .map((entry, index) => getSourceTag(entry, urlList[index]))

  return (
    <Picture>
      {sources}
      <Img
        src={src || urlList[urlList.length - 1]}
        alt={alt}
        loading='lazy'
      />
    </Picture>
  )
}
