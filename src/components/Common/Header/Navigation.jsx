import React from 'react'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import LinkButton from '../LinkButton'
import { getGutter } from '../../../utils/getGutter'
import getBreakpoints from '../../../utils/getBreakpoints'
import ToggleModalButton from './ToggleModalButton'

const NavWrapper = styled.nav`
  ${ getBreakpoints({
    xs: css`
      position: fixed;
      z-index: ${ ({ theme }) => theme.zIndex.fixed };
      top: 0;
      right: ${ ({ openMenu }) => (openMenu ? '0' : '-100%') };
      width: 100vw;
      max-width: ${ ({ theme }) => `${ theme.breakpoints.sm }px` };
      height: 100vh;
      background-color: ${ ({ theme }) => theme.color.white };
      transition: right ${ ({ theme }) => theme.transition.medium };
    `,
    md: css`
      position: initial;
      width: auto;
      height: auto;
      background-color: transparent;
    `
  }) }
`

const NavList = styled.ul`
  ${ getBreakpoints({
    xs: css`display: block;`,
    md: css`display: flex;`
  }) };
`

const NavItem = styled.li`
  ${ getBreakpoints({
    xs: css`border-bottom: 1px solid ${ ({ theme }) => theme.color.gray };`,
    md: css`border-bottom: 1px solid ${ ({ theme, isCurrentPage }) => (
      isCurrentPage && theme.color.white
    ) };`
  }) }

  &:first-child {
    ${ getBreakpoints({
    xs: css`margin-top: ${ getGutter(17) };`,
    md: css`margin-top: 0;`
  }) };
  }
`

const NavLink = styled(LinkButton)`
  ${ getBreakpoints({
    xs: css`
      display: block;
      padding: ${ getGutter(5, '5%') };
      color: ${ ({ theme, isCurrentPage }) => (
    isCurrentPage ? theme.color.white : theme.color.black
  ) };
      background-color: ${ ({ theme, isCurrentPage }) => (
    isCurrentPage ? theme.color.red : theme.color.white
  ) };
    `,
    md: css`
      padding: ${ getGutter(5) };
      background-color: transparent;
    `
  }) }
`

const Overlay = styled.div`
  position: fixed;
  z-index: ${ ({ theme }) => theme.zIndex.under };
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${ ({ theme }) => (
    theme.color.black + theme.opacity.light.hex
  ) };
  opacity: ${ ({ openMenu }) => (openMenu ? '1' : '0') };
  transition: ${ ({ theme }) => theme.transition.medium };
  pointer-events: ${ ({ openMenu }) => (openMenu ? 'all' : 'none') };
`

const CloseMenuMobileButton = styled.button`
  ${ getBreakpoints({
    xs: css`
      position: absolute;
      top: ${ getGutter(3) };
      right: ${ getGutter(3) };
    `,
    md: css`
      display: none;
    `
  }) }
`

export default function Navigation({ openMenu, toggleMenu }) {
  const router = useRouter()

  const navigationList = [
    { title: 'Home', url: '/' },
    { title: 'Sobre', url: '/about' },
    { title: 'Contato', url: '/contact' }
  ]

  const navigationElements = navigationList.map(menu => {
    const isCurrentPage = router.pathname === menu.url
    return (
      <NavItem key={menu.title} isCurrentPage={isCurrentPage}>
        <NavLink href={menu.url} isCurrentPage={isCurrentPage}>
          {menu.title}
        </NavLink>
      </NavItem>
    )
  })

  return (
    <>
      <Overlay openMenu={openMenu} onClick={toggleMenu} />
      <NavWrapper openMenu={openMenu}>
        <NavList>
          {navigationElements}
        </NavList>
        <ToggleModalButton
          onClick={toggleMenu}
          icon='close'
          as={CloseMenuMobileButton}
        />
      </NavWrapper>
    </>
  )
}
