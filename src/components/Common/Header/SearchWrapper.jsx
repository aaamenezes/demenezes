import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import Container from '../Container'
import ToggleModalButton from './ToggleModalButton'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'

const Search = styled.div`
  ${ getBreakpoints({
    xs: css`display: none;`,
    md: css`display: block;`
  }) }
`

const SearchToggleButton = styled.button`
  transform: ${ ({ isMinimizeHeader }) => (
    isMinimizeHeader ? 'translateY(-200%)' : 'translateX(0)'
  ) };
  transition: ${ ({ theme }) => theme.transition.medium };
`

const SearchContent = styled.div`
  ${ getBreakpoints({
    xs: css`
      position: fixed;
      z-index: ${ ({ theme }) => theme.zIndex.fixed };
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: ${ ({ theme }) => (
    theme.color.black + theme.opacity.hard.hex
  ) };
      opacity: ${ ({ openSearch }) => openSearch ? '1' : '0' };
      transition: ${ ({ theme }) => theme.transition.medium };
      pointer-events: ${ ({ openSearch }) => openSearch ? 'all' : 'none' };
    `
  }) }
`

const CloseMenuMobileButton = styled.button`
  ${ getBreakpoints({
    xs: css`
      position: absolute;
      top: ${ getGutter(3) };
      right: 5%;
    `
  }) }
`

export default function SearchWrapper({ isMinimizeHeader }) {
  const [ openSearch, setOpenSearch ] = useState(false)
  const router = useRouter()

  function toggleSearch() {
    setOpenSearch(!openSearch)
  }

  const isHome = router.pathname === '/'
  const isListing = router.pathname.includes('/page/')
  const isPosts = router.pathname.includes('/posts/')

  return (
    <Search>
      <ToggleModalButton
        isMinimizeHeader={isMinimizeHeader}
        as={SearchToggleButton}
        onClick={toggleSearch}
        icon='search'
        color={isHome || isListing || isPosts ? 'gray' : 'blackAlt'}
        display={{
          xs: 'none',
          md: 'flex'
        }}
      />
      <Container as={SearchContent} openSearch={openSearch}>
        <ToggleModalButton
          onClick={toggleSearch}
          icon='close'
          color='gray'
          as={CloseMenuMobileButton}
        />
      </Container>
    </Search>
  )
}
