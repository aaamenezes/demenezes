import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import LinkButton from '../LinkButton'
import Navigation from './Navigation'
import { getGutter } from '../../../utils/getGutter'
import SearchWrapper from './SearchWrapper'
import ToggleModalButton from './ToggleModalButton'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: ${ ({ theme }) => theme.zIndex.fixed };
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${ getGutter(3, '5%') };
`

const LogoLink = styled.a`
  display: block;
  transform: ${ ({ isMinimizeHeader }) => (
    isMinimizeHeader ? 'translateX(100vw)' : 'translateX(0)'
  ) };
  transition: ${ ({ theme }) => theme.transition.medium };
`

const Logo = styled.img`
  margin: 0;
`

export default function Header({ isMinimizeHeader }) {
  const router = useRouter()
  const [ openMenu, setOpenMenu ] = useState(false)

  function toggleMenu() {
    setOpenMenu(!openMenu)
  }

  const logoImage = (
    <LinkButton
      href='/'
      as={LogoLink}
      isMinimizeHeader={isMinimizeHeader}
    >
      <Logo
        src='https://via.placeholder.com/200x50'
        alt='Logo do site'
      />
    </LinkButton>
  )

  const isHome = router.pathname === '/'
  const logoWrapper = isHome ? <h1>{logoImage}</h1> : logoImage
  const toggleMenuColor = (
    (isHome && isMinimizeHeader) || !(isHome) ? 'black' : 'gray'
  )

  return (
    <HeaderWrapper>
      {logoWrapper}
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
    </HeaderWrapper>
  )
}
