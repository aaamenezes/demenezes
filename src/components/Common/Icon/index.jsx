import React from 'react'
import styled from 'styled-components'
import propToStyle from '../../../utils/propToStyles'

const IconStyled = styled.i`
  transition: ${ ({ theme }) => theme.transition.fast };

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
      <IconStyled className='fas fa-bars' name={name} />
    )
  case 'github':
    return (
      <IconStyled
        className='fab fa-github'
        name={name}
        color={{ xs: '#272727' }}
      />
    )
  case 'twitter':
    return (
      <IconStyled
        className='fab fa-twitter'
        name={name}
        color={{ xs: '#4EA6E9' }}
      />
    )
  case 'medium':
    return (
      <IconStyled
        className='fab fa-medium'
        name={name}
        color={{ xs: '#11100E' }}
      />
    )
  case 'linkedin':
    return (
      <IconStyled
        className='fab fa-linkedin'
        name={name}
        color={{ xs: '#0073AF' }}
      />
    )
  case 'external':
    return (
      <IconStyled
        className='fas fa-external-link-alt'
        name={name}
        inline={inline}
        color={{ xs: 'currentColor' }}
      />
    )
  case 'instagram':
    return (
      <IconStyled
        className='fab fa-instagram'
        name={name}
        inline={inline}
        color={{ xs: '#F02002' }}
      />
    )
  case 'search':
    return (
      <IconStyled
        className='fas fa-search'
        name={name}
        inline={inline}
        color={{ xs: 'currentColor' }}
      />
    )
  case 'close':
    return (
      <IconStyled
        className='fas fa-times-circle'
        // className='far fa-times-circle'
        name={name}
        inline={inline}
        color={{ xs: 'currentColor' }}
      />
    )
  default:
    return (
      <IconStyled
        className='fas fa-question-circle'
        name={name}
        color={{ xs: 'currentColor' }}
      />
    )
  }
}
