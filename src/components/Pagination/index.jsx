import React from 'react'
import styled, { css } from 'styled-components'
import { POSTS_PER_PAGE } from '../../../lib/constants'
import getBreakpoints from '../../utils/getBreakpoints'
import { getGutter } from '../../utils/getGutter'
import Container from '../Common/Container'
import LinkButton from '../Common/LinkButton'

const PaginationWrapper = styled.section`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5%;
    `,
    md: css`
      flex-direction: row;
      justify-content: flex-end;
    `
  }) }
`

const PaginationButton = styled.a`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: ${ getGutter(75) };
      text-align: center;
      padding: ${ getGutter(5) };
      border-radius: ${ ({ theme }) => theme.borderRadius };
      border: 1px solid ${ ({ theme }) => theme.color.black };

      &:nth-child(2) {
        margin: ${ getGutter(10, 0, 0) };
      }
    `,
    md: css`
      &:nth-child(2) {
        margin: ${ getGutter(0) };
        margin-left: auto;
      }
    `
  }) }
`

export default function Pagination({ currentPage, isLastPage }) {
  const previousLink = `/page/${ +currentPage - 1 }`.replace('page/1', '')
  const nextLink = `/page/${ +currentPage + 1 }`

  return (
    <Container as={PaginationWrapper}>
      {
        currentPage > 1 && (
          <LinkButton
            as={PaginationButton}
            href={previousLink}
            aria-labelledby={`Ver os ${ POSTS_PER_PAGE } posts mais recentes`}
          >
            Posts mais recentes
          </LinkButton>
        )
      }
      {
        !isLastPage
          ? (
            <LinkButton
              as={PaginationButton}
              href={nextLink}
              aria-labelledby={`Ver os ${ POSTS_PER_PAGE } posts mais antigos`}
            >
              Próxima página
            </LinkButton>
          )
          : (
            <LinkButton
              as={PaginationButton}
              href='#'
              aria-labelledby='Parabéns, você chegou ao início do blog :)'
            >
              Parabéns, você chegou ao início do blog :)
            </LinkButton>
          )
      }
    </Container>
  )
}
