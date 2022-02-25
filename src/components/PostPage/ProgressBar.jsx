import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  position: fixed;
  z-index: ${ ({ theme }) => theme.zIndex.fixed };
  top: 0;
  left: 0;
  height: 0.2rem;
  background-color: ${ ({ theme }) => theme.color.red_700 };
`

export default function ProgressBar() {
  const [ barWidth, setBarWidth ] = useState(0)

  function updateBarWidth() {
    const postElement = document.querySelector('[class*="PostPage"]')

    if (postElement) {
      const postHeight = postElement.offsetHeight
      const YPosition = window.scrollY
      const heightPercent = (YPosition * 100) / postHeight
      return heightPercent
    }

    return 0
  }

  useEffect(() => {
    document.addEventListener('scroll', () => setBarWidth(updateBarWidth()))
  }, [])

  return <Bar style={{ width: `${ barWidth }%` }} />
}
