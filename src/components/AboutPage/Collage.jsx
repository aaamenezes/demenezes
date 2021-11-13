import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import { getGutter } from '../../utils/getGutter'
import Container from '../Common/Container'

const StyledCollage = styled.section`
  ${ getBreakpoints({
    xs: css`
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      max-width: ${ getGutter(225) };
    `,
    sm: css`
      grid-template-columns: 1fr 1fr;
    `,
    md: css`
      grid-template-columns: 1fr 1fr 1fr;
    `
  }) }
`

const CollageImage = styled.img`
  ${ getBreakpoints({
    xs: css`
      border: ${ getGutter(1) } solid ${ ({ theme }) => theme.color.white };

      &:not(:first-child) { margin-top: -10%; }
      &:nth-child(odd) { margin-right: 10%; }
      &:nth-child(even) { margin-left: 10%; }
    `,
    sm: css`
      &:not(:first-child) { margin-top: 0; }
      &:nth-child(odd) { margin-right: 0; }
      &:nth-child(even) { margin-left: 0; }

      &:nth-child(3) { margin-right: -10%; margin-top: -10%; }
      &:nth-child(4) { margin-right: -10%; margin-top: -10%; }
      &:nth-child(5) { margin-top: -10%; }
      &:nth-child(6) { margin-top: -10%; }
    `,
    md: css`
      &:nth-child(3) { margin-right: 0; margin-top: 0; }
      &:nth-child(4) { margin-right: 0; margin-top: 0; }

      &:nth-child(2) { margin-top: 5%; }
      &:nth-child(5) { margin-top: 5%; }
      &:nth-child(6) { margin-top: 0; }
    `
  }) }
`

export default function Collage() {
  return (
    <Container as={StyledCollage}>
      <CollageImage src='https://via.placeholder.com/300' alt='' />
      <CollageImage src='https://via.placeholder.com/300' alt='' />
      <CollageImage src='https://via.placeholder.com/300' alt='' />
      <CollageImage src='https://via.placeholder.com/300' alt='' />
      <CollageImage src='https://via.placeholder.com/300' alt='' />
      <CollageImage src='https://via.placeholder.com/300' alt='' />
    </Container>
  )
}
