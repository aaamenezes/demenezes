import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import Container from '../Common/Container'
import LinkButton from '../Common/LinkButton'

const PaginationWrapper = styled.div`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      align-items: center;
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
      text-align: center;
      line-height: ${ ({ theme }) => theme.lineHeight.button };
      padding: 0.66rem;
      border-radius: ${ ({ theme }) => theme.borderRadius };
      border: 1px solid ${ ({ theme }) => theme.color.neutral_900 };
      transition: ${ ({ theme }) => theme.transition.fast };

      &::after {
        content: '';
        position: absolute;
        z-index: ${ ({ theme }) => theme.zIndex.under };
        ${ ({ label }) => label === 'previous' ? 'right: 0;' : 'left: 0;' }
        height: 100%;
        width: 0;
        background-color: ${ ({ theme }) => theme.color.red_500 };
        transition: ${ ({ theme }) => theme.transition.fast };
      }

      &:hover {
        color: ${ ({ theme }) => theme.color.neutral_50 };
        border-color: ${ ({ theme }) => theme.color.red_500 };
        &::after {
          width: 100%;
        }
      }

      &:nth-child(2) {
        margin: 2.2rem 0 0;
      }
    `,
    md: css`
      width: initial;

      &:nth-child(2) {
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
    <Container as={PaginationWrapper} width='xxl' spacing='2'>
      {
        CURRENT_PAGINATION > 1 && (
          <LinkButton
            as={PaginationButton}
            href={previousLink}
            label='previous'
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
              label='next'
            >
              Pr??xima p??gina
            </LinkButton>
          )
          : (
            <LinkButton
              as={PaginationButton}
              href='/'
              aria-labelledby='Parab??ns, voc?? chegou ao in??cio do blog :)'
              label='next'
            >
              Parab??ns, voc?? chegou ao in??cio do blog :)
            </LinkButton>
          )
      }
    </Container>
  )
}
