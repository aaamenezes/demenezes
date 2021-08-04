import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-left: 5%;
  padding-right: 5%;
  margin-left: auto;
  margin-right: auto;
`

export default function Container({ tag, children, ...props }) {
  return (
    <ContainerWrapper as={tag} {...props}>
      {children}
    </ContainerWrapper>
  )
}
