import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'

const StyledIcon = styled.i`
  ${ getBreakpoints({
    xs: css`
      padding: ${ ({ external }) => !external && '0.66rem 0.88rem' };
      font-size: ${ ({ external }) => external && '0.7rem' };
      color: ${ ({ color }) => color || 'currentColor' };
      transition: ${ ({ theme }) => theme.transition.fast };
    `,
    md: css`
      &:hover {
        transform: ${ ({ external }) => !external && 'scale(1.5)' };
        color: ${ ({ color }) => color };
      }
    `
  }) }
`

export default function Icon({ name, inline, color }) {
  switch (name) {
  case 'github':
    return (
      <StyledIcon
        className='fab fa-github'
        name={name}
        color='#9BA5AA'
      />
    )
  case 'twitter':
    return (
      <StyledIcon
        className='fab fa-twitter'
        name={name}
        color='#4EA6E9'
      />
    )
  case 'medium':
    return (
      <StyledIcon
        className='fab fa-medium'
        name={name}
        color='#11100E'
      />
    )
  case 'linkedin':
    return (
      <StyledIcon
        className='fab fa-linkedin'
        name={name}
        color='#0073AF'
      />
    )
  case 'instagram':
    return (
      <StyledIcon
        className='fab fa-instagram'
        name={name}
        inline={inline}
        color='#F02002'
      />
    )
  case 'bars':
    return (
      <StyledIcon
        className='fas fa-bars'
        name={name}
      />
    )
  case 'search':
    return (
      <StyledIcon
        className='fas fa-search'
        name={name}
        inline={inline}
      />
    )
  case 'external':
    return (
      <>
        {' '}
        <StyledIcon
          className='fas fa-external-link-alt'
          name={name}
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
        name={name}
        inline={inline}
      />
    )
  case 'arrow-left':
    return (
      <StyledIcon
        className='fas fa-angle-left'
        name={name}
        inline={inline}
      />
    )
  case 'arrow-right':
    return (
      <StyledIcon
        className='fas fa-angle-right'
        name={name}
        inline={inline}
      />
    )
  case 'code':
    return (
      <StyledIcon
        className='fas fa-code'
        name={name}
        inline={inline}
      />
    )
  case 'terminal':
    return (
      <StyledIcon
        className='fas fa-terminal'
        name={name}
        inline={inline}
      />
    )
  case 'people':
    return (
      <StyledIcon
        className='fas fa-people-carry'
        name={name}
        inline={inline}
      />
    )
  case 'job':
    return (
      <StyledIcon
        className='far fa-building'
        name={name}
        inline={inline}
      />
    )
  case 'tool':
    return (
      <StyledIcon
        className='fas fa-hammer'
        name={name}
        inline={inline}
      />
    )
  case 'balance':
    return (
      <StyledIcon
        className='fas fa-balance-scale'
        name={name}
        inline={inline}
      />
    )
  case 'link':
    return (
      <StyledIcon
        className='fas fa-solid fa-link'
        name={name}
        inline={inline}
        color={color}
      />
    )
  default:
    return (
      <StyledIcon
        className='fas fa-question-circle'
        name={name}
      />
    )
  }
}
