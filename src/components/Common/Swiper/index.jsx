import React, { useEffect, useState } from 'react'
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import PostCard from '../PostCard'
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
  }, [])

  function getSlidesPerView() {
    const { breakpoints } = theme
    const breakpointsEntries = Object.entries(breakpoints)
    const currentBreakpoint = breakpointsEntries.find(
      breakpoint => breakpoint[1] >= screenWidth
    )

    const slidesPerView = breakpointsEntries.indexOf(currentBreakpoint) || 1

    const fraction = 0.15

    return slidesPerView < 4 ? slidesPerView + fraction : 4 + fraction
  }

  const postsList = slides.map(slide => (
    <SwiperSlide key={slide.title} tag='li'>
      <PostCard
        post={slide}
        imageRatio='4x3'
        width='full'
        spacing='0'
        isCompact
      />
    </SwiperSlide>
  ))

  return (
    <>
      <SwiperContainer
        spaceBetween={getSlidesPerView() * 5}
        slidesPerView={getSlidesPerView()}
        wrapperTag='ul'
        pagination={{ clickable: true }}
      >
        {postsList}
        {/* <ArrowButton direction='prev' />
      <ArrowButton direction='next' /> */}
      </SwiperContainer>
      <style>
        {`
          .swiper-container {
            padding-bottom: 3rem;
          }

          .swiper-pagination-bullet.swiper-pagination-bullet-active {
            background-color: ${ theme.color.red };
          }
        `}
      </style>
    </>
  )
}
