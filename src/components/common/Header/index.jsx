import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import OpenMenuMobileButton from './OpenMenuMobileButton'
import MenuMobile from './MenuMobile'
import LinkButton from '../LinkButton'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 5%;
`

const Logo = styled.img`
  margin: 0;
`

export default function Header() {
  const router = useRouter()
  const [ openMenu, setOpenMenu ] = useState(false)

  function toggleMenu() {
    setOpenMenu(!openMenu)
  }

  return (
    <HeaderWrapper>
      {
        router.pathname === '/'
          ? (
            <h1>
              <LinkButton href='/'>
                <Logo src='http://placehold.it/200x50/' alt='Logo do site' />
              </LinkButton>
            </h1>
          )
          : (
            <LinkButton href='/'>
              <Logo src='http://placehold.it/200x50/' alt='Logo do site' />
            </LinkButton>
          )
      }
      <OpenMenuMobileButton openMenu={openMenu} toggleMenu={toggleMenu} />
      <MenuMobile openMenu={openMenu} toggleMenu={toggleMenu} />
    </HeaderWrapper>
  )
}
