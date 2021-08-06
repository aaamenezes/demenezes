import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../../../utils/getGutter'
import Icon from '../Icon'

const Button = styled.button`
  width: 45px;
  height: 45px;
  padding: ${ getGutter(3, '5%') };
  border: 0;
  background-color: ${ ({ theme }) => theme.color.gray };
  border-radius: ${ ({ theme }) => theme.borderRadius };
  cursor: pointer;
`

export default function OpenMenuMobileButton({ toggleMenu }) {
  return (
    <Button onClick={toggleMenu}>
      <Icon name='bars' />
    </Button>
  )
}
