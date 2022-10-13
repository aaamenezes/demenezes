import React from 'react'
import styled from 'styled-components'

const StyledVideo = styled.video`
  max-width: 112%;
  margin: 0 -6%;
`

export default function Video({ url, alt }) {
  return (
    <StyledVideo src={url} controls>
      <p>{alt}</p>
    </StyledVideo>
  )
}
