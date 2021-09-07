import React from 'react'
import styled, { css } from 'styled-components'
import { POSTS_PER_PAGE } from '../../settings'
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
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: ${ getGutter(75) };
      text-align: center;
      padding: ${ getGutter(3) };
      border-radius: ${ ({ theme }) => theme.borderRadius };
      border: 2px solid ${ ({ theme }) => theme.color.black };
      transition: ${ ({ theme }) => theme.transition.fast };

      &::after {
        content: '';
        position: absolute;
        z-index: ${ ({ theme }) => theme.zIndex.under };
        ${ ({ label }) => label === 'previous' ? 'right: 0;' : 'left: 0;' };
        height: 100%;
        width: 0;
        background-color: ${ ({ theme }) => theme.color.red5 };
        transition: ${ ({ theme }) => theme.transition.fast };
      }

      &:hover {
        color: ${ ({ theme }) => theme.color.white };
        border-color: ${ ({ theme }) => theme.color.red5 };
        &::after {
          width: 100%;
        }
      }

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

export default function Pagination({ currentPagination, isLastPagination }) {
  const previousLink = `/page/${ +currentPagination - 1 }`.replace('page/1', '')
  const nextLink = `/page/${ +currentPagination + 1 }`

  return (
    <Container as={PaginationWrapper}>
      {
        currentPagination > 1 && (
          <LinkButton
            as={PaginationButton}
            href={previousLink}
            aria-labelledby={`Ver os ${ POSTS_PER_PAGE } posts mais recentes`}
            label='previous'
          >
            Posts mais recentes
          </LinkButton>
        )
      }
      {
        !isLastPagination
          ? (
            <LinkButton
              as={PaginationButton}
              href={nextLink}
              aria-labelledby={`Ver os ${ POSTS_PER_PAGE } posts mais antigos`}
              label='next'
            >
              Próxima página
            </LinkButton>
          )
          : (
            <LinkButton
              as={PaginationButton}
              href='/'
              aria-labelledby='Parabéns, você chegou ao início do blog :)'
              label='next'
            >
              Parabéns, você chegou ao início do blog :)
            </LinkButton>
          )
      }
    </Container>
  )
}
