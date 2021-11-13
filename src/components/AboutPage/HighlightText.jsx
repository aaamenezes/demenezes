import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'

const StyledHighlightText = styled.section`
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

const HighlightTitle = styled.h2`
  color: ${ ({ theme }) => theme.color.gray };
`

export default function HighlightText() {
  return (
    <Container as={StyledHighlightText}>
      <HighlightTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita, eveniet repellat eaque totam iste voluptatum voluptatem mollitia fugiat eius tempora error harum fugit? Quas aliquam quod vel ipsam rem.
      </HighlightTitle>
    </Container>
  )
}
