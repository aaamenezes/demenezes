/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'

const StyledContactForm = styled.div`
  &:first-of-type {
    padding-top: 6.6rem;
  }
`

const ContactTitle = styled.h2`
  margin-top: ${ ({ theme }) => `${ theme.spacing.h2 }rem` };
`

export default function ContactForm() {
  return (
    <Container as={StyledContactForm} width='md'>
      <ContactTitle>Fala comigo</ContactTitle>
      <p>Quer falar sobre algum projeto, carreira, mercado de trabalho, ou apenas conversar sobre como é prazeroso usar `display: grid;`?</p>
      <p>Me deixa uma mensagem aí:</p>
      <div>[FORMULÁRIO]</div>
    </Container>
  )
}
