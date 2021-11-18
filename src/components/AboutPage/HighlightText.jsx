import React from 'react'
import styled from 'styled-components'
import Container, { containerPadding } from '../Common/Container'

const TextWrapper = styled.div`
  padding: ${ containerPadding };
  background-image: ${ ({ theme }) => (
    `linear-gradient(
      179deg,
      ${ theme.color.white } 29px,
      ${ theme.color.blackAlt } 30px,
      ${ theme.color.blackAlt } calc(100% - 30px),
      ${ theme.color.white } calc(100% - 29px)
    )`
  ) };
`

const Text = styled.p`
  margin-bottom: 0;
  color: ${ ({ theme }) => theme.color.gray };
`

export default function HighlightText({ children }) {
  return (
    <Container as={TextWrapper} fullWidth>
      <Container as={Text}>
        {children}
      </Container>
    </Container>
  )
}
