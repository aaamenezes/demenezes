import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../../theme'
import getBreakpoints from '../../../utils/getBreakpoints'

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

const Figcaption = styled.figcaption`
  ${ getBreakpoints({
    xs: css`
      max-width: 112%;
      padding: 1rem 1rem;
      margin: 0 -6%;
      line-height: ${ theme.lineHeight.button };
      font-size: ${ theme.fontSize.small };
      background-color: ${ theme.color.neutral_300 };
    `,
    sm: css`padding: 1rem 1.5rem;`,
    md: css`padding: 1rem 2rem;`,
    lg: css`padding: 1rem 2.5rem;`
  }) }
`

export default function Image({ src, alt, title, srcSet }) {
  const urlList = srcSet
    .split(',')
    .map(size => size.split(' ')[0])

  const { breakpoints } = theme
  const sources = Object.entries(breakpoints)
    .slice(1, 4)
    .map((entry, index) => getSourceTag(entry, urlList[index]))

  return (
    <figure>
      <Picture>
        {sources}
        <Img
          src={src || urlList[urlList.length - 1]}
          alt={alt}
          loading='lazy'
        />
      </Picture>
      {/* {title && <Figcaption>{title}</Figcaption>} */}
      <Figcaption>{title || alt}</Figcaption>
    </figure>
  )
}
