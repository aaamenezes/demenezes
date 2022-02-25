import React from 'react'
import styled from 'styled-components'

const ArrowButtonStyled = styled.button`
  color: ${ ({ theme }) => theme.color.red_700 };
  pointer-events: none;
`

export default function ArrowButton({ direction }) {
  return <ArrowButtonStyled className={`swiper-button-${ direction }`} />
}
