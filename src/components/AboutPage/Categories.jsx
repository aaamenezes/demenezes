/* eslint-disable max-len */
import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import { getGutter } from '../../utils/getGutter'
import Container from '../Common/Container'
import Icon from '../Common/Icon'

const CategoriesList = styled.ul`
  ${ getBreakpoints({
    xs: css`
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: ${ getGutter(12) };
      text-align: center;
    `,
    sm: css`
      grid-template-columns: 1fr 1fr;
      grid-gap: ${ getGutter(15) };
    `,
    xl: css`
      grid-template-columns: 1fr 1fr 1fr;
    `
  }) }
`

const CategoryItem = styled.li`
  ${ getBreakpoints({
    xs: css`
      max-width: 300px;
      margin: 0 auto;
    `,
    md: css`
      max-width: initial;
      margin: initial;
    `
  }) }
`

export default function Categories() {
  const content = [
    {
      icon: 'code',
      title: 'Linguagens',
      text: 'HTML, CSS e Javascript. Componentes, construção, código e mão na massa'
    },
    {
      icon: 'job',
      title: 'Carreira',
      text: 'Mercado de trabalho'
    },
    {
      icon: 'people',
      title: 'Pessoas',
      text: 'Comunidade e eventos'
    },
    {
      icon: 'balance',
      title: 'Produtividade',
      text: 'Dicas, truques, '
    },
    {
      icon: 'terminal',
      title: 'Ferramentas',
      text: 'Libs, plugins, pacotes, Git, NPM, Yarn, Bash'
    },
    {
      icon: 'tool',
      title: 'Equipamentos',
      text: 'Periféricos, acessórios, etc'
    }
  ]

  const CategoryItems = content.map(({ icon, title, text }) => (
    <CategoryItem key={title}>
      <h3>
        <Icon name={icon} color='black' inline />
        {' '}
        { title }
      </h3>
      <p>{ text }</p>
    </CategoryItem>
  ))

  return (
    <Container as='section'>
      <header>
        <h2>
          Categorias: o que tem por aqui
        </h2>
      </header>

      <CategoriesList>
        {CategoryItems}
      </CategoriesList>
    </Container>
  )
}
