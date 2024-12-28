import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../utils/getBreakpoints'

const StyledIcon = styled.i<{
  external?: boolean
  inline?: boolean
}>`
  ${({theme, external, color}) => {
    return getBreakpoints({
      xs: css`
        padding: ${!external && '0.66rem 0.88rem' };
        font-size: ${external ? '0.7rem' : '1.2rem' };
        color: ${color || 'currentColor' };
        transition: ${theme.transition.fast};
      `,
      md: css`
        &:hover {
          transform: ${!external && 'scale(1.5)' };
          color: ${color};
        }
      `
    })
  }}

`

export default function Icon({
  name,
  inline,
  color
}: {
  name: string
  inline?: boolean
  color?: string
}) {
  switch (name) {
  case 'github':
    return (
      <StyledIcon
        className='fab fa-github'
        color='#9BA5AA'
      />
    )
  case 'twitter':
    return (
      <StyledIcon
        className='fab fa-twitter'
        color='#4EA6E9'
      />
    )
  case 'medium':
    return (
      <StyledIcon
        className='fab fa-medium'
        color='#9BA5AA'
      />
    )
  case 'linkedin':
    return (
      <StyledIcon
        className='fab fa-linkedin'
        color='#0073AF'
      />
    )
  case 'instagram':
    return (
      <StyledIcon
        className='fab fa-instagram'
        color='#F02002'
      />
    )
  case 'dev.to':
    return (
      <StyledIcon
        className='fas fa-code'
        // 'fa-brands fa-dev'
        color='#9BA5AA'
      />
    )
  case 'bars':
    return (
      <StyledIcon
        className='fas fa-bars'
      />
    )
  case 'search':
    return (
      <StyledIcon
        className='fas fa-search'
        inline={inline}
      />
    )
  case 'external':
    return (
      <>
        {' '}
        <StyledIcon
          className='fas fa-external-link-alt'
          inline={inline}
          external
        />
      </>
    )
  case 'close':
    return (
      <StyledIcon
        className='fas fa-times-circle'
        // className='far fa-times-circle'
        inline={inline}
      />
    )
  case 'arrow-left':
    return (
      <StyledIcon
        className='fas fa-angle-left'
        inline={inline}
      />
    )
  case 'arrow-right':
    return (
      <StyledIcon
        className='fas fa-angle-right'
        inline={inline}
      />
    )
  case 'code':
    return (
      <StyledIcon
        className='fas fa-code'
        inline={inline}
      />
    )
  case 'terminal':
    return (
      <StyledIcon
        className='fas fa-terminal'
        inline={inline}
      />
    )
  case 'people':
    return (
      <StyledIcon
        className='fas fa-people-carry'
        inline={inline}
      />
    )
  case 'job':
    return (
      <StyledIcon
        className='far fa-building'
        inline={inline}
      />
    )
  case 'tool':
    return (
      <StyledIcon
        className='fas fa-hammer'
        inline={inline}
      />
    )
  case 'balance':
    return (
      <StyledIcon
        className='fas fa-balance-scale'
        inline={inline}
      />
    )
  case 'link':
    return (
      <StyledIcon
        className='fas fa-solid fa-link'
        inline={inline}
        color={color}
      />
    )
  default:
    return (
      <StyledIcon
        className='fas fa-question-circle'
      />
    )
  }
}
