import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Navigation from './Navigation'
import { getGutter } from '../../../utils/getGutter'
import SearchWrapper from './SearchWrapper'
import ToggleModalButton from './ToggleModalButton'
import Container from '../Container'
import Logowrapper from '../LogoWrapper'

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
`

export default function Header({ isMinimizeHeader }) {
  const router = useRouter()
  const [ openMenu, setOpenMenu ] = useState(false)

  function toggleMenu() {
    setOpenMenu(!openMenu)
  }

  const isHome = router.pathname === '/'
  const toggleMenuColor = (
    (isHome && isMinimizeHeader) || !(isHome) ? 'black' : 'gray'
  )

  return (
    <Container as={HeaderWrapper}>
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
