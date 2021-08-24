import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'
import Container from '../Container'

const NewsletterWrapper = styled.section`
  ${ getBreakpoints({
    xs: css`
      padding-top: ${ getGutter(5) };
      padding-bottom: ${ getGutter(5) };
      margin-bottom: 15%;
      color: ${ ({ theme }) => theme.color.white };
      background-color: ${ ({ theme }) => theme.color.gray };
    `
  }) }
`

export default function Newsletter() {
  return (
    <Container as={NewsletterWrapper}>
      <form>
        {/* eslint-disable-next-line max-len */}
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quos, culpa rerum odit eum labore asperiores voluptate delectus hic, nesciunt sint cumque suscipit, at vel aliquam magnam! Dolores, cum mollitia.</p>
        <input
          type='text'
          // value='name'
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
      </form>
    </Container>
  )
}
