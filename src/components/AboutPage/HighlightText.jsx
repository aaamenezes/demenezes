import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'

const StyledHighlightText = styled.div`
  background-image: ${ ({ theme }) => (
    `linear-gradient(
      179deg,
      ${ theme.color.white } 29px,
      ${ theme.color.redAlt5 } 30px,
      ${ theme.color.redAlt5 } calc(100% - 30px),
      ${ theme.color.white } calc(100% - 29px)
    )`
  ) };
`

const TextWrapper = styled.div`
  padding-top: 4.4rem;
  padding-bottom: 4.4rem;
  margin-bottom: 0;
  color: ${ ({ theme }) => theme.color.white };
`

export default function HighlightText({ children }) {
  return (
    <Container as={StyledHighlightText} width='xxxl' fluid>
      <Container as={TextWrapper} width='md' fluid>
        <p>
          {children}
        </p>
      </Container>
    </Container>
  )
}
