import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../../../utils/getGutter'
import propToStyle from '../../../utils/propToStyles'
import Icon from '../Icon'

const Button = styled.button`
  width: 45px;
  height: 45px;
  padding: ${ getGutter(3) };
  border: 0;
  background-color: ${ ({ theme }) => theme.color.gray };
  border-radius: ${ ({ theme }) => theme.borderRadius };
  cursor: pointer;

  ${ propToStyle('display') }
`

export default function ToggleModalButton({ onClick, icon, ...props }) {
  return (
    <Button onClick={onClick} {...props}>
      <Icon name={icon} />
    </Button>
  )
}
