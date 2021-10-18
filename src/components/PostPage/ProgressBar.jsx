import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getGutter } from '../../utils/getGutter'

const Bar = styled.div`
  position: fixed;
  z-index: ${ ({ theme }) => theme.zIndex.fixed };
  top: 0;
  left: 0;
  width: ${ ({ width }) => `${ width }%` };
  height: ${ getGutter(1) };
  transition: ${ ({ theme }) => theme.transition.slow };
  background-color: ${ ({ theme }) => theme.color.red };
`

export default function ProgressBar() {
  const [ barWidth, setBarWidth ] = useState(0)

  function updateBarWidth() {
    const postHeight = document.querySelector(
      '[class*="PostPage"]'
    ).offsetHeight
    const YPosition = window.scrollY
    const heightPercent = (YPosition * 100) / postHeight
    return heightPercent
  }

  useEffect(() => {
    document.addEventListener('scroll', () => setBarWidth(updateBarWidth()))
  }, [])

  return <Bar width={barWidth} />
}
