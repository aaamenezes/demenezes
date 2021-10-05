import React, { useEffect, useState } from 'react'
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import PostCard from '../PostCard'
import ArrowButton from './Arrows'
import { theme } from '../../../theme'

SwiperCore.use([ Navigation, Pagination ])

export default function Swiper({ slides }) {
  const [ screenWidth, setScreenWidth ] = useState(1)

  function handleResize() {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    // REMOVER ESSE REMOVE EVENT?
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function getSlidesPerView() {
    const { breakpoints } = theme
    const breakpointsEntries = Object.entries(breakpoints)
    const currentBreakpoint = breakpointsEntries
      .reverse()
      .find(breakpoint => breakpoint[1] < screenWidth)

    const slidesPerView = breakpointsEntries
      .reverse()
      .indexOf(currentBreakpoint) + 1

    return slidesPerView
  }

  const postsList = slides.map(slide => (
    <SwiperSlide key={slide.title} tag='li'>
      <PostCard post={slide} imageRatio='4x3' />
    </SwiperSlide>
  ))

  return (
    <SwiperContainer
      spaceBetween={getSlidesPerView() * 10}
      slidesPerView={getSlidesPerView()}
      wrapperTag='ul'
      navigation
      pagination
    >
      {postsList}
      <ArrowButton direction='prev' />
      <ArrowButton direction='next' />
    </SwiperContainer>
  )
}
