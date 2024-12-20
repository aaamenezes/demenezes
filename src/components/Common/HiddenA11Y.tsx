import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledHiddenA11Y = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  -webkit-clip: rect(0 0 0 0);
  clip: rect(0 0 0 0);
  overflow: hidden;
  word-wrap: normal;
`

export default function HiddenA11Y({
  tag,
  children
}: PropsWithChildren<{
  tag: keyof HTMLElementTagNameMap
}>)
{
  return (
    <StyledHiddenA11Y as={tag}>
      {children}
    </StyledHiddenA11Y>
  )
}
