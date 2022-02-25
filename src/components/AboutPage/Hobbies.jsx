import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'
import settings from '../../../settings.json'

const HobbiesTitle = styled.h2`
  margin-top: ${ ({ theme }) => `${ theme.spacing.h2 }rem` };
`

export default function Hobbies() {
  const { TITLE, TEXT } = settings.HOBBIES

  return (
    <Container as='section' width='md'>
      <HobbiesTitle>{TITLE}</HobbiesTitle>
      <p>{TEXT}</p>
    </Container>
  )
}
