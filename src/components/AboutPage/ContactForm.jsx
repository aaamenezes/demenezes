/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'
import StyledTextBody from '../Common/StyledTextBody'

const StyledContactForm = styled(StyledTextBody)`
  &:first-of-type {
    padding-top: 6.6rem;
  }
`

export default function ContactForm() {
  return (
    <Container as={StyledContactForm} width='md'>
      <h2>Fala comigo</h2>
      <p>Quer falar sobre algum projeto, carreira, mercado de trabalho, ou apenas conversar sobre como é prazeroso usar `display: grid;`?</p>
      <p>Me deixa uma mensagem aí:</p>
      <div>[FORMULÁRIO]</div>
    </Container>
  )
}
