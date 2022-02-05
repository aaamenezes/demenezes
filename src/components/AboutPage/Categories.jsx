/* eslint-disable max-len */
import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import { getGutter } from '../../utils/getGutter'
import Container from '../Common/Container'
import Icon from '../Common/Icon'
import Title from '../Common/Title'

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
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
      padding: ${ getGutter(4) };
      margin: 0 auto;
      box-shadow: ${ ({ theme }) => theme.boxShadow.low };
      transition: ${ ({ theme }) => theme.transition.fast };
      
      &:hover {
        box-shadow: ${ ({ theme }) => theme.boxShadow.high };

        > * {
          opacity: 1;
        }
      }
    `,
    md: css`
      max-width: initial;
      margin: initial;
    `
  }) }
`

const CategoryItemHeader = styled.header`
  ${ getBreakpoints({
    xs: css`
      margin-bottom: ${ getGutter(2) };
    `,
    md: css`
      margin-bottom: 0;
    `
  }) }
`

const CategoryText = styled.p`
  ${ getBreakpoints({
    md: css`
      margin: auto;
      transition: ${ ({ theme }) => theme.transition.fast };
    `,
    xl: css`
      opacity: 0;
    `
  }) }
`

export default function Categories() {
  const content = [
    {
      icon: 'code',
      title: 'Front-end',
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
      <CategoryItemHeader>
        <Title tag='h3' align='center'>
          <Icon name={icon} color='black' inline />
          {' '}
          <span>{title}</span>
        </Title>
      </CategoryItemHeader>
      <CategoryText>{ text }</CategoryText>
    </CategoryItem>
  ))

  return (
    <Container as='section' width='xl'>
      <header>
        <Title>
          Categorias: o que tem por aqui
        </Title>
      </header>

      <CategoriesList>
        {CategoryItems}
      </CategoriesList>
    </Container>
  )
}
