import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'
import HighlightText from './HighlightText'

const StoryTitle = styled.h2`
  margin-top: ${ ({ theme }) => `${ theme.spacing.h2 }rem` };
`

/**
 * Evento do google
 * https://events.withgoogle.com/google-em-poa/
 *
 * Bruno Souza
 * https://twitter.com/brjavaman
 *
 * Yara Senger
 * https://twitter.com/yarasenger
 */

export default function Story({ historyTitle, historyText }) {
  const firstParagraph = historyText.split('\n')[0]
  const remainingText = historyText.split('\n').slice(1).map(
    (text, index) => index % 2 === 0
      ? <HighlightText key={text}>{text}</HighlightText>
      : <Container width='md' key={text}><p>{text}</p></Container>
  )

  return (
    <>
      <Container width='md'>
        <StoryTitle>{historyTitle}</StoryTitle>
        <p>{firstParagraph}</p>
      </Container>
      {remainingText}
    </>
  )
}
