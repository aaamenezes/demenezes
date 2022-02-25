import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import Container from '../Container'

const NewsletterForm = styled.form`
  ${ getBreakpoints({
    xs: css`
      padding-top: 1.1rem;
      padding-bottom: 1.1rem;
      background-color: ${ ({ theme }) => theme.color.neutral_200 };
    `
  }) }
`

export default function Newsletter() {
  return (
    <Container as={NewsletterForm} width='xxxl' fluid>
      <Container width='md' spacing='0'>
        {/* eslint-disable-next-line max-len */}
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quos, culpa rerum odit eum labore asperiores voluptate delectus hic, nesciunt sint cumque suscipit, at vel aliquam magnam! Dolores, cum mollitia.</p>
        <input
          type='text'
          placeholder='Insira seu nome'
          aria-label='Insira seu nome'
        />
        <input
          type='email'
          name='email'
          placeholder='Insira seu e-mail'
          aria-label='Insira seu e-mail'
        />
        <button type='submit'>
          Quero me cadastrar
        </button>
        {/* eslint-disable-next-line max-len */}
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quos, culpa rerum odit eum labore asperiores voluptate delectus hic, nesciunt sint cumque suscipit, at vel aliquam magnam! Dolores, cum mollitia.</p>
      </Container>
    </Container>
  )
}
