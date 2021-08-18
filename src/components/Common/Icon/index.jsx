import React from 'react'
import styled from 'styled-components'

const IconStyled = styled.i`
  transition: ${ ({ theme }) => theme.transition.fast };

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
        style={{ color: '#272727' }}
      />
    )
  case 'twitter':
    return (
      <IconStyled
        className='fab fa-twitter'
        name={name}
        style={{ color: '#4EA6E9' }}
      />
    )
  case 'medium':
    return (
      <IconStyled
        className='fab fa-medium'
        name={name}
        style={{ color: '#11100E' }}
      />
    )
  case 'linkedin':
    return (
      <IconStyled
        className='fab fa-linkedin'
        name={name}
        style={{ color: '#0073AF' }}
      />
    )
  case 'external':
    return (
      <IconStyled
        className='fas fa-external-link-alt'
        name={name}
        inline={inline}
        style={{ color: 'currentColor' }}
      />
    )
  case 'instagram':
    return (
      <IconStyled
        className='fab fa-instagram'
        name={name}
        inline={inline}
        style={{ color: '#F02002' }}
      />
    )
  default:
    return (
      <IconStyled
        className='fas fa-question-circle'
        name={name}
        style={{ color: 'currentColor' }}
      />
    )
  }
}
