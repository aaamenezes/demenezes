import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import { getGutter } from '../../../utils/getGutter'
import SearchWrapper from './SearchWrapper'
import ToggleModalButton from './ToggleModalButton'
import Container from '../Container'
import Logowrapper from '../LogoWrapper'
import { BlogContext } from '../../../BlogContext'

const HeaderWrapper = styled.header`
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  z-index: ${ ({ theme }) => theme.zIndex.fixed };
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${ getGutter(3) };
  padding-bottom: ${ getGutter(3) };
  background-color: ${ ({ theme, isMinimizeHeader, currentPage }) => (
    currentPage === 'listing' && !isMinimizeHeader && (
      theme.color.black + theme.opacity.hard.hex
    )
  )
};
  transition: ${ ({ theme }) => theme.transition.medium };
`

export default function Header({ isMinimizeHeader }) {
  const [ openMenu, setOpenMenu ] = useState(false)
  const { currentPage, headerTemplate } = useContext(BlogContext)

  function toggleMenu() {
    setOpenMenu(!openMenu)
  }

  const toggleMenuColor = (
    ((headerTemplate === 'primary') && isMinimizeHeader)
    || (headerTemplate === 'secondary')
      ? 'black'
      : 'gray'
  )

  return (
    <Container
      as={HeaderWrapper}
      isMinimizeHeader={isMinimizeHeader}
      currentPage={currentPage}
    >
      <Logowrapper isMinimizeHeader={isMinimizeHeader} />
      <ToggleModalButton
        onClick={toggleMenu}
        icon='bars'
        color={toggleMenuColor}
        display={{
          md: 'none'
        }}
      />
      <Navigation
        openMenu={openMenu}
        toggleMenu={toggleMenu}
        isMinimizeHeader={isMinimizeHeader}
      />
      <SearchWrapper isMinimizeHeader={isMinimizeHeader} />
    </Container>
  )
}
