/* eslint-disable max-len */
import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import Container from '../Common/Container'
import Icon from '../Common/Icon'
import settings from '../../../settings.json'

const CategoriesList = styled.ul`
  ${ getBreakpoints({
    xs: css`
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2.64rem;
      text-align: center;
    `,
    sm: css`
      grid-template-columns: 1fr 1fr;
      grid-gap: 3.3rem;
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
      padding: 0.88rem;
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
      margin-bottom: 0.44rem;
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
  const { CATEGORIES } = settings
  const CategoryItems = CATEGORIES.map(({ icon, title, description }) => (
    <CategoryItem key={title}>
      <CategoryItemHeader>
        <h3>
          <Icon name={icon} color='black' inline />
          {' '}
          <span>{title}</span>
        </h3>
      </CategoryItemHeader>
      <CategoryText>{ description }</CategoryText>
    </CategoryItem>
  ))

  return (
    <Container as='section' width='xl'>
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
