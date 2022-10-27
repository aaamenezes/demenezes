import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'

const StyledHighlightText = styled.div`
  background-image: ${ ({ theme }) => (
    `linear-gradient(
      179deg,
      ${ theme.color.neutral_50 } 29px,
      ${ theme.color.red_600 } 30px,
      ${ theme.color.red_600 } calc(100% - 30px),
      ${ theme.color.neutral_50 } calc(100% - 29px)
    )`
  ) };
`

const TextWrapper = styled.div`
  padding-top: 4.4rem;
  padding-bottom: 4.4rem;
  margin-bottom: 0;
  color: ${ ({ theme }) => theme.color.neutral_50 };
`

export default function HighlightText({ children }) {
  return (
    <Container as={StyledHighlightText} width='full' fluid>
      <Container as={TextWrapper} width='md' fluid>
        <p>
          {children}
        </p>
      </Container>
    </Container>
  )
}
