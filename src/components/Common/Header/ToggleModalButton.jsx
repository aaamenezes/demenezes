import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../../../utils/getGutter'
import propToStyle from '../../../utils/propToStyles'
import Icon from '../Icon'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  padding: ${ getGutter(3) };
  border: 0;
  background-color: transparent;
  border-radius: ${ ({ theme }) => theme.borderRadius };
  cursor: pointer;

  ${ propToStyle('display') }

  i {
    font-size: ${ ({ theme }) => theme.fontSize.articleTitle };
    color: ${ ({ theme, color }) => theme.color[color] };
  }
`

export default function ToggleModalButton({ onClick, icon, color, ...props }) {
  return (
    <Button onClick={onClick} color={color} {...props}>
      <Icon name={icon} />
    </Button>
  )
}
