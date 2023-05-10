import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../utils/getBreakpoints'
import Container from './Common/Container'
import LinkButton from './Common/LinkButton'
import { PaginationButton } from './PaginationButton'

const PaginationWrapper = styled.div`
  ${ getBreakpoints({
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
  }) }
`

export default function Pagination({ CURRENT_PAGINATION, IS_LAST_PAGINATION }) {
  const previousLink = (
    `/page/${ +CURRENT_PAGINATION - 1 }`.replace('page/1', '')
  )
  const nextLink = `/page/${ +CURRENT_PAGINATION + 1 }`

  return (
    <Container as={PaginationWrapper} width='xxl' spacing={2}>
      {
        CURRENT_PAGINATION > 1 && (
          <LinkButton
            as={PaginationButton}
            href={previousLink}
          >
            Posts mais recentes
          </LinkButton>
        )
      }
      {
        !IS_LAST_PAGINATION
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
