import React from 'react'
import styled from 'styled-components'

const StyledIframe = styled.iframe`
  width: 100%;
`

export default function Iframe({ title, videoID }) {
  return (
    <StyledIframe
      title={title}
      height='480'
      src={`https://www.youtube.com/embed/${ videoID }`}
      frameBorder='0'
      allow='accelerometer;clipboard-write;encrypted-media;picture-in-picture'
      allowFullScreen
    />
  )
}
