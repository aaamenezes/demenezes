import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Container from '../Container'
import ToggleModalButton from './ToggleModalButton'
import getBreakpoints from '../../../utils/getBreakpoints'

const ToggleSearchModal = styled.button`
  ${ getBreakpoints({
    xs: css`
      display: none;
    `,
    md: css`
      display: flex;
    `
  }) }
`

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
      opacity: ${ ({ openSearch }) => openSearch ? '1' : '0' };
      transition: ${ ({ theme }) => theme.transition.medium };
      pointer-events: ${ ({ openSearch }) => openSearch ? 'all' : 'none' };
    `
  }) }
`

const CloseSearchButton = styled.button`
  position: absolute;
  top: 0.66rem;
  right: 5%;
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
        color='gray'
        as={ToggleSearchModal}
        aria-labelledby='Abrir busca do blog'
      />
      <Container as={SearchContent} width='xl' openSearch={openSearch}>
        <ToggleModalButton
          onClick={toggleSearch}
          icon='close'
          color='gray'
          as={CloseSearchButton}
          aria-labelledby='Fechar busca do blog'
        />
      </Container>
    </Search>
  )
}
