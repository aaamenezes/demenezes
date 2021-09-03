import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'
import propToStyle from '../../../utils/propToStyles'

const StyledIcon = styled.i`
  ${ getBreakpoints({
    xs: css`
      padding: ${ getGutter(3, 4) };
      color: ${ ({ color }) => color };
      transition: ${ ({ theme }) => theme.transition.fast };

      &:hover {
        transform: scale(1.5);
      }
    `,
    md: css`
      color: ${ ({ theme }) => theme.color.white };

      &:hover {
        color: ${ ({ color }) => color };
      }
    `
  }) }

  ${ propToStyle('color') }

  /* &:not(:hover) { */
    /* Lembrar de deixar tudo preto no desktop, e colorir no hover */
    /* color: ${ ({ theme }) => theme.color.black } !important; */
  /* } */
`

export default function Icon({ name, inline }) {
  switch (name) {
  case 'bars':
    return (
      <StyledIcon className='fas fa-bars' name={name} />
    )
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
  case 'external':
    return (
      <StyledIcon
        className='fas fa-external-link-alt'
        name={name}
        inline={inline}
        color='currentColor'
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
  case 'search':
    return (
      <StyledIcon
        className='fas fa-search'
        name={name}
        inline={inline}
        color='currentColor'
      />
    )
  case 'close':
    return (
      <StyledIcon
        className='fas fa-times-circle'
        // className='far fa-times-circle'
        name={name}
        inline={inline}
        color='currentColor'
      />
    )
  default:
    return (
      <StyledIcon
        className='fas fa-question-circle'
        name={name}
        color='currentColor'
      />
    )
  }
}
