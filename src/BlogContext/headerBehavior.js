import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Common/Header'

export function headerBehavior() {
  const heroRef = useRef(null)
  const [ isMinimizeHeader, setIsMinimizeHeader ] = useState(false)

  function handleIntersect(entries) {
    const [ entry ] = entries
    const heroBottom = entry.boundingClientRect.bottom
    const isScrollOnTop = heroBottom < (window.innerHeight * 0.3)
    if (isScrollOnTop) {
      setIsMinimizeHeader(true)
    } else {
      setIsMinimizeHeader(false)
    }
  }

  const intersectOptions = {
    root: null,
    rootMargin: '0px',
    threshold: [ 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1 ]
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, intersectOptions)
    if (heroRef.current) observer.observe(heroRef.current)
  }, [ <Header /> ])

  return [ heroRef, isMinimizeHeader ]
}
