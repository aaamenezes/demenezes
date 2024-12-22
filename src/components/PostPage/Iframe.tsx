import React from 'react'
import styled from 'styled-components'

const StyledIframe = styled.iframe`
  width: 100%;
`

export default function Iframe({ title, videoID }: { title: string, videoID: string }) {
  return (
    <StyledIframe
      title={title}
      height='480'
      src={`https://www.youtube.com/embed/${ videoID }`}
      frame-border='0'
      allow='accelerometer;clipboard-write;encrypted-media;picture-in-picture'
      allowFullScreen
    />
  )
}
