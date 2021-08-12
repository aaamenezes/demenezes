import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../../utils/getGutter'
import Container from '../common/Container'
import LinkButton from '../common/LinkButton'

const PaginationWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const PaginationButton = styled.a`
  display: block;
  text-align: center;
  padding: ${ getGutter(5) };
  border-radius: ${ ({ theme }) => theme.borderRadius };
  border: 1px solid ${ ({ theme }) => theme.color.black };

  &:nth-child(2) {
    margin-top: ${ getGutter(10) };
  }
`

export default function Pagination({ currentPage, postsPerPage, isLastPage }) {
  const previousLink = +currentPage === 2 ? '/' : `/?page=${ currentPage - 1 }`
  const nextLink = `/?page=${ +currentPage + 1 }`

  return (
    <Container as={PaginationWrapper}>
      {
        currentPage > 1 && (
          <LinkButton
            as={PaginationButton}
            href={previousLink}
            aria-labelledby={`Ver os ${ postsPerPage } posts mais recentes`}
          >
            Posts mais recentes
          </LinkButton>
        )
      }
      {
        !isLastPage && (
          <LinkButton
            as={PaginationButton}
            href={nextLink}
            aria-labelledby={`Ver os ${ postsPerPage } posts mais antigos`}
          >
            Próxima página
          </LinkButton>
        )
      }
    </Container>
  )
}