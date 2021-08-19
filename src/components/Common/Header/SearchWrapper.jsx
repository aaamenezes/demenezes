import React, { useState } from 'react'
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
      opacity: ${ ({ openSearch }) => (openSearch ? '1' : '0') };
      transition: ${ ({ theme }) => theme.transition.medium };
      pointer-events: ${ ({ openSearch }) => (openSearch ? 'all' : 'none') };
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

export default function SearchWrapper() {
  const [ openSearch, setOpenSearch ] = useState(false)

  function toggleSearch() {
    setOpenSearch(!openSearch)
  }

  return (
    <Search>
      <ToggleModalButton
        onClick={toggleSearch}
        icon='search'
        display={{
          xs: 'none',
          md: 'block'
        }}
      />
      <Container as={SearchContent} openSearch={openSearch}>
        <ToggleModalButton
          onClick={toggleSearch}
          icon='close'
          as={CloseMenuMobileButton}
        />
      </Container>
    </Search>
  )
}
