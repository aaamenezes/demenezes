/* eslint-disable max-len */
import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'
import Container from '../Common/Container'
import CropedImage from '../Common/CropedImage'
import HiddenA11Y from '../Common/HiddenA11Y'
import settings from '../../../settings.json'

const StyledGreeting = styled.section`
  ${ getBreakpoints({
    xs: css`
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem 0;
      padding-top: 6.6rem;
    `,
    md: css`
      grid-template-columns: 1fr 1fr;
      grid-gap: 0 2rem;
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

const GreetingTitle = styled.h2`
  margin-top: 0;
`

const GreetingText = styled.p`
  ${ getBreakpoints({
    xs: css`text-align: center;`,
    md: css`text-align: left;`
  }) }
`

export default function Greeting() {
  const { GREETING } = settings

  return (
    <Container as={StyledGreeting} width='lg'>
      <ImageWrapper>
        <CropedImage
          src={GREETING.IMAGE.SRC}
          alt={GREETING.IMAGE.ALT}
          ratio={GREETING.IMAGE.RATIO}
        />
      </ImageWrapper>
      <HiddenA11Y tag='h1'>{GREETING.TITLE}</HiddenA11Y>
      <GreetingTitle>{GREETING.SUBTITLE}</GreetingTitle>
      <GreetingText>{GREETING.TEXT}</GreetingText>
    </Container>
  )
}
