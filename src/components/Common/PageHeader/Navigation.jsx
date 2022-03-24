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
      background-color: ${ ({ theme }) => theme.color.neutral_300 };
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
    xs: css`
      display: block;
      margin: 0 !important;
      list-style: none;
    `,
    md: css`
      display: flex;
    `
  }) };
`

const NavItem = styled.li`
  ${ getBreakpoints({
    xs: css`
      border-bottom: 1px solid ${ ({ theme }) => theme.color.neutral_300 };
    `,
    md: css`
      position: relative;
      border: none;
    `
  }) }

  &::after {
    ${ getBreakpoints({
    md: css`
      content: '';
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      bottom: 0;
      width: ${ ({ isCurrentPage }) => isCurrentPage ? '100%' : '0' };
      height: 2px;
      background-color: ${ ({ theme }) => theme.color.neutral_100 };
      transition: ${ ({ theme }) => theme.transition.fast };
    `
  }) }
  }

  &:hover::after {
    ${ getBreakpoints({
    md: css`
      width: 100%;
    `
  }) }
  }

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
    isCurrentPage ? theme.color.neutral_100 : theme.color.neutral_800
  ) };
      background-color: ${ ({ theme, isCurrentPage }) => (
    isCurrentPage ? theme.color.red_700 : theme.color.neutral_100
  ) };
    `,
    md: css`
      padding: 0.88rem;
      color: ${ ({ theme }) => theme.color.neutral_50 };
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
    theme.color.neutral_900 + theme.opacity.medium.hex
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
  const { CURRENT_PAGE } = getPageInfos()

  const navigationElements = settings.NAVIGATION_MENU.map(menu => {
    const isCurrentPage = (
      router.pathname === menu.url
      || (CURRENT_PAGE === 'listing' && menu.title === 'Home')
    )

    return (
      <NavItem key={menu.title} isCurrentPage={isCurrentPage}>
        <LinkButton as={NavLink} href={menu.url} isCurrentPage={isCurrentPage}>
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
          color='neutral_800'
          as={CloseMenuMobileButton}
        />
      </NavWrapper>
    </>
  )
}
