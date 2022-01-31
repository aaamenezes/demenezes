import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  text-align: ${ ({ align }) => align };
`

export default function Title({ tag, align, children }) {
  return (
    <StyledTitle as={tag} align={align}>
      {children}
    </StyledTitle>
  )
}
