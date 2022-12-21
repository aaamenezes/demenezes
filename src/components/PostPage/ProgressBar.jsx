import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  position: fixed;
  z-index: ${ ({ theme }) => theme.zIndex.fixed };
  top: 0;
  left: 0;
  height: 0.1rem;
  background-color: ${ ({ theme }) => theme.color.red_700 };
`

export default function ProgressBar() {
  const [ barWidth, setBarWidth ] = useState(0)

  useEffect(() => {
    function getBarWidth() {
      const postElement = document.querySelector('[class*="PostPage"]')

      if (!postElement) return 0

      const postHeight = postElement.offsetHeight
      const YPosition = window.scrollY
      const heightPercent = (YPosition * 100) / postHeight
      return heightPercent
    }

    document.addEventListener('scroll', () => setBarWidth(getBarWidth()))
  }, [])

  return <Bar style={{ width: `${ barWidth }%` }} />
}
