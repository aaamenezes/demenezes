import React from 'react'
import styled, { css } from 'styled-components'
import Container from './Common/Container'
import LinkButton from './Common/LinkButton'
import { PaginationButton } from './PaginationButton'
import getBreakpoints from '../utils/getBreakpoints'

const PaginationWrapper = styled.div`
  ${getBreakpoints({
  xs: css`
      display: flex;
      flex-direction: column;
      align-items: center;

      > a:nth-child(2) {
        margin: 2.2rem 0 0;
      }
    `,
  md: css`
      flex-direction: row;
      justify-content: flex-end;

      > a:nth-child(2) {
        margin: 0;
        margin-left: auto;
      }
    `
})}
`

export default function Pagination({ currentPagination, isLastPagination }) {
  const previousLink = (
    `/page/${+currentPagination - 1}`.replace('page/1', '')
  )
  const nextLink = `/page/${+currentPagination + 1}`

  return (
    <Container as={PaginationWrapper} width='xxl' spacing={2}>
      {
        currentPagination > 1 && (
          <LinkButton
            as={PaginationButton}
            href={previousLink}
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
            >
              Próxima página
            </LinkButton>
          )
          : (
            <LinkButton
              as={PaginationButton}
              href='/'
            >
              Parabéns, você chegou ao início do blog :)
            </LinkButton>
          )
      }
    </Container>
  )
}
