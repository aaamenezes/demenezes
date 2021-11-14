import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'

const TextWrapper = styled.div`
  padding: 20% 10%;
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
  color: ${ ({ theme }) => theme.color.gray };
`

export default function HighlightText({ children }) {
  return (
    <Container as={TextWrapper}>
      <Text>
        {children}
      </Text>
    </Container>
  )
}
