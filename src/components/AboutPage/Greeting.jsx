/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'
import CropedImage from '../Common/CropedImage'

const StyledGreeting = styled.section`
  max-width: ${ ({ theme }) => `${ theme.breakpoints.lg }px` };
  padding-top: 120px;
`

export default function Greeting() {
  return (
    <Container as={StyledGreeting}>
      <CropedImage
        src='https://pbs.twimg.com/profile_images/1452832195173826561/b6Pd2RHx_400x400.jpg'
        alt='Foto de perfil'
        ratio='4x3'
      />
      <h1>Olá pessoas! (e demais)</h1>
      <p>Criei esse blog pra falar sobre programação front-end, fazer parte da comunidade e ajudar qualquer um que precise.</p>
    </Container>
  )
}
