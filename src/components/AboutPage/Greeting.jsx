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

export default function Greeting({
  greetingTitle,
  greetingSubtitle,
  greetingDescription,
  profileImage
}) {
  const src = profileImage.responsiveImage.srcSet
    .split(',')[0]
    .split(' ')[0]

  return (
    <Container as={StyledGreeting} width='lg'>
      <ImageWrapper>
        <CropedImage
          src={src}
          alt={profileImage.alt}
          ratio='4x3'
        />
      </ImageWrapper>
      <HiddenA11Y tag='h1'>{greetingTitle}</HiddenA11Y>
      <GreetingTitle>{greetingSubtitle}</GreetingTitle>
      <GreetingText>{greetingDescription}</GreetingText>
    </Container>
  )
}
