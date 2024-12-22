import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Button = styled.button<{
  color: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  padding: 0.66rem;
  border: 0;
  color: ${({ theme, color }) => theme.color[color] || 'currentColor'};
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  i {
    font-size: ${({ theme }) => theme.fontSize.articleTitle};
  }
`

export default function ToggleModalButton({
  onClick = () => {},
  icon,
  color = 'currentColor',
  ...props
}: {
  onClick: () => void
  icon: string
  color?: string
}) {
  return (
    <Button onClick={onClick} color={color} {...props}>
      <Icon name={icon} />
    </Button>
  )
}
