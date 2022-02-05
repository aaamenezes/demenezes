/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../../utils/getGutter'
import Container from '../Common/Container'

const StyledContactForm = styled.section`
  &:first-of-type {
    padding-top: ${ getGutter(30) };
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
