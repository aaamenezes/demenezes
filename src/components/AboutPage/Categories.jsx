/* eslint-disable max-len */
import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import Container from '../Common/Container'
import Icon from '../Common/Icon'
import settings from '../../../settings.json'

const CategoriesTitle = styled.h2`
  margin-top: ${ ({ theme }) => `${ theme.spacing.h2 }rem` };
`

const CategoriesList = styled.ul`
  ${ getBreakpoints({
    xs: css`
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
      margin: 0;
      text-align: center;
    `,
    md: css`
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    `,
    xl: css`
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 3rem;
    `
  }) }
`

const CategoryItem = styled.li`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      padding: 2rem;
      margin: 0 auto;
      box-shadow: none;
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

const CategoryItemTitle = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 1rem;
`

const CategoryText = styled.p`
  ${ getBreakpoints({
    md: css`
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
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
      <CategoryItemTitle>
        <Icon
          name={icon}
          color='black'
          inline
        />
        <span>{title}</span>
      </CategoryItemTitle>
      <CategoryText>{ description }</CategoryText>
    </CategoryItem>
  ))

  return (
    <Container as='section' width='xl'>
      <header>
        <CategoriesTitle>
          Categorias: o que tem por aqui
        </CategoriesTitle>
      </header>

      <CategoriesList>
        {CategoryItems}
      </CategoriesList>
    </Container>
  )
}
