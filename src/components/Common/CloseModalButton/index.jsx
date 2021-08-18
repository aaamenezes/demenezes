import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  text-align: center;
  background-color: ${ ({ theme }) => theme.color.gray };
  cursor: pointer;
`

export default function CloseModalButton({ handleClick }) {
  return (
    <Button onClick={handleClick}>
      &times;
    </Button>
  )
}
