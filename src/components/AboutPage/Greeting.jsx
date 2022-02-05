/* eslint-disable max-len */
import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import Container from '../Common/Container'
import CropedImage from '../Common/CropedImage'
import HiddenA11Y from '../Common/HiddenA11Y'

const StyledGreeting = styled.section`
  ${ getBreakpoints({
    xs: css`
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2.2rem 0;
      padding-top: 6.6rem;
    `,
    md: css`
      grid-template-columns: 1fr 1fr;
      grid-gap: 0 22rem;
    `
  }) }
`

const ImageWrapper = styled.div`
  ${ getBreakpoints({
    md: css`
      grid-row: 1 / 3;
    `
  }) }
`

export default function Greeting() {
  return (
    <Container as={StyledGreeting} width='lg'>
      <ImageWrapper>
        <CropedImage
          src='https://pbs.twimg.com/profile_images/1452832195173826561/b6Pd2RHx_400x400.jpg'
          alt='Foto de perfil'
          ratio='4x3'
        />
      </ImageWrapper>
      <HiddenA11Y tag='h1'>Página sobre</HiddenA11Y>
      <h2>Que bom que vc está aqui!</h2>
      <p>Criei esse blog pra falar sobre programação front-end, fazer parte da comunidade e ajudar qualquer um que precise.</p>
    </Container>
  )
}
