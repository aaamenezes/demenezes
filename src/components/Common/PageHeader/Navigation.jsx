import React from 'react'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import LinkButton from '../LinkButton'
import getBreakpoints from '../../../utils/getBreakpoints'
import ToggleModalButton from './ToggleModalButton'
import { getPageInfos } from '../../../utils/getPageInfos'
import settings from '../../../../settings.json'

const NavWrapper = styled.nav`
  ${ getBreakpoints({
    xs: css`
      position: fixed;
      z-index: ${ ({ theme }) => theme.zIndex.fixed };
      top: 0;
      right: ${ ({ openMenu }) => openMenu ? '0' : '-100%' };
      width: 100vw;
      max-width: ${ ({ theme }) => `${ theme.breakpoints.sm }px` };
      height: 100vh;
      background-color: ${ ({ theme }) => theme.color.white };
      transition: ${ ({ theme }) => theme.transition.medium };
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
    xs: css`
      border-bottom: 1px solid ${ ({ theme }) => theme.color.gray };
    `,
    md: css`
      border-bottom: 1px solid ${ ({ theme, isCurrentPage, color }) => (
    isCurrentPage ? theme.color[color] : 'transparent'
  ) };
      transition: ${ ({ theme }) => theme.transition.fast };

      &:hover {
        border-bottom: 1px solid ${ ({ theme, color }) => theme.color[color] };
      }
    `
  }) }

  &:first-child {
    ${ getBreakpoints({
    xs: css`margin-top: 3.74rem;`,
    md: css`margin-top: 0;`
  }) };
  }
`

const NavLink = styled.a`
  ${ getBreakpoints({
    xs: css`
      display: block;
      padding: 1.1rem 5%;
      color: ${ ({ theme, isCurrentPage }) => (
    isCurrentPage ? theme.color.white : theme.color.black
  ) };
      background-color: ${ ({ theme, isCurrentPage }) => (
    isCurrentPage ? theme.color.red : theme.color.white
  ) };
    `,
    md: css`
      padding: 0.88rem;
      color: ${ ({ theme, color }) => theme.color[color] };
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
    theme.color.black + theme.opacity.medium.hex
  ) };
  opacity: ${ ({ openMenu }) => openMenu ? '1' : '0' };
  transition: ${ ({ theme }) => theme.transition.medium };
  pointer-events: ${ ({ openMenu }) => openMenu ? 'all' : 'none' };
`

const CloseMenuMobileButton = styled.button`
  ${ getBreakpoints({
    xs: css`
      position: absolute;
      top: 0.66rem;
      right: 0.66rem;
    `,
    md: css`
      display: none;
    `
  }) }
`

export default function Navigation({ openMenu, toggleMenu }) {
  const router = useRouter()
  const { CURRENT_PAGE, HEADER_TEMPLATE } = getPageInfos()

  const navigationElements = settings.NAVIGATION_MENU.map(menu => {
    const isCurrentPage = (
      router.pathname === menu.url
      || (CURRENT_PAGE === 'listing' && menu.title === 'Home')
    )

    const color = HEADER_TEMPLATE === 'primary' ? 'white' : 'black'

    return (
      <NavItem key={menu.title} isCurrentPage={isCurrentPage} color={color}>
        <LinkButton
          href={menu.url}
          as={NavLink}
          color={color}
          isCurrentPage={isCurrentPage}
        >
          {menu.title}
        </LinkButton>
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
          color='blackAlt'
          as={CloseMenuMobileButton}
        />
      </NavWrapper>
    </>
  )
}
