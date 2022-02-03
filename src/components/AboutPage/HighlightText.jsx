import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../../utils/getGutter'
import Container from '../Common/Container'

const TextWrapper = styled.div`
  background-image: ${ ({ theme }) => (
    `linear-gradient(
      179deg,
      ${ theme.color.white } 29px,
      ${ theme.color.redAlt5 } 30px,
      ${ theme.color.redAlt5 } calc(100% - 30px),
      ${ theme.color.white } calc(100% - 29px)
    )`
  ) };
`

const Text = styled.p`
  padding-top: ${ getGutter(20) };
  padding-bottom: ${ getGutter(20) };
  margin-bottom: 0;
  color: ${ ({ theme }) => theme.color.white };
`

export default function HighlightText({ children }) {
  return (
    <Container as={TextWrapper} width='xxxl'>
      <Container as={Text} width='md'>
        {children}
      </Container>
    </Container>
  )
}
