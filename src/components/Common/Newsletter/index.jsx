import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'
import { getWidth } from '../../../utils/getWidth'
import Container from '../Container'

const NewsletterWrapper = styled.section`
  ${ getBreakpoints({
    xs: css`
      padding-top: ${ getGutter(5) };
      padding-bottom: ${ getGutter(5) };
      color: ${ ({ theme }) => theme.color.white };
      background-color: ${ ({ theme }) => theme.color.gray };
    `
  }) }
`

const NewsletterForm = styled.form`
  max-width: ${ getWidth('xl') };
  margin: 0 auto;
`

export default function Newsletter() {
  return (
    <Container as={NewsletterWrapper} fullWidth>
      <NewsletterForm>
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
      </NewsletterForm>
    </Container>
  )
}
