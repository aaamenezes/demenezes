import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../../theme'
import getBreakpoints from '../../../utils/getBreakpoints'

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
      width: fit-content;
      padding: 1rem 1rem;
      margin: 1rem auto 0;
      line-height: ${ theme.lineHeight.h4 };
      font-size: ${ theme.fontSize.small };
      background-color: ${ theme.color.neutral_300 };
    `,
    sm: css`padding: 1rem 1.5rem;`,
    md: css`padding: 1rem 2rem;`,
    lg: css`padding: 1rem 2.5rem;`
  }) }
`

export default function Image({ src, width, alt, title }) {
  return (
    <figure>
      <Picture>
        {width >= 425 && (
          <source media='(max-width: 425px)' srcSet={`${ src }&w=425`} />
        )}
        {width >= 860 && (
          <source media='(max-width: 768px)' srcSet={`${ src }&w=860`} />
        )}
        {width >= 1111 && (
          <source media='(max-width: 992px)' srcSet={`${ src }&w=1111`} />
        )}
        <Img src={src} alt={alt} loading='lazy' />
      </Picture>
      {/* {title && <Figcaption>{title}</Figcaption>} */}
      <Figcaption>{title || alt}</Figcaption>
    </figure>
  )
}
