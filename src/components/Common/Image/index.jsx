import React from 'react'
// import { theme } from '../../../theme'

export default function Image({
  src,
  alt
  // percentInMobile,
  // percentInTablet,
  // percentInDesktop
}) {
  // const { breakpoints } = theme
  // Object.entries(breakpoints).reverse.map(([ key, value ]) => {
  //   console.log('key:', key)
  //   console.log('value:', value)
  // })

  /*
  const _percentInDesktop = percentInDesktop || 100
  const _percentInTablet = percentInTablet || 100
  const _percentInMobile = percentInMobile || 100

  const size_on_1400 = `${ parseInt((_percentInDesktop / 100) * 1600, 10) }x`
  const size_on_1200 = `${ parseInt((_percentInDesktop / 100) * 1400, 10) }x`
  const size_on_950 = `${ parseInt((_percentInDesktop / 100) * 1200, 10) }x`
  const size_on_750 = `${ parseInt((_percentInTablet / 100) * 950, 10) }x`
  const size_on_600 = `${ parseInt((_percentInTablet / 100) * 750, 10) }x`
  const size_on_455 = `${ parseInt((_percentInMobile / 100) * 600, 10) }x`
  const size_on_0 = `${ parseInt((_percentInMobile / 100) * 455, 10) }x`
  */

  return (
    <picture>
      {/* {sources}
      <source media="(min-width:1400px)" srcSet={ widthIn1400 } />
      <source media="(min-width:1200px)" srcSet={ widthIn1200 } />
      <source media="(min-width:950px)" srcSet={ widthIn950 } />
      <source media="(min-width:750px)" srcSet={ widthIn750 } />
      <source media="(min-width:600px)" srcSet={ widthIn600 } />
      <source media="(min-width:455px)" srcSet={ widthIn455 } />
      <source media="(min-width:0px)" srcSet={ widthIn0 } /> */}

      <img
        src={src}
        alt={alt}
        loading='lazy'
      />
    </picture>
  )
}
