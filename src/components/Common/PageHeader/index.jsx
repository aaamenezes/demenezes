import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Navigation from './Navigation'
import { getGutter } from '../../../utils/getGutter'
import ToggleModalButton from './ToggleModalButton'
import Container from '../Container'
import Logowrapper from '../LogoWrapper'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getPageInfos } from '../../../utils/getPageInfos'

const HeaderWrapper = styled.header`
  position: fixed;
  transform: ${ ({ openHeader }) => !openHeader && 'translateY(-100%)' };
  z-index: ${ ({ theme }) => theme.zIndex.fixed };
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding-top: ${ getGutter(3) };
  padding-bottom: ${ getGutter(3) };
  color: ${ ({ theme, headerColor }) => theme.color[headerColor] };
  background-color: ${ ({ theme, CURRENT_PAGE }) => (
    CURRENT_PAGE === 'listing' && theme.color.black + theme.opacity.hard.hex
  ) };
  transition: ${ ({ theme }) => theme.transition.medium };
`

const ToggleMenuButton = styled.button`
  ${ getBreakpoints({
    md: css`
      display: none;
    `
  }) }
`

export default function PageHeader() {
  const [ openMenu, setOpenMenu ] = useState(false)
  const [ openHeader, setOpenHeader ] = useState(true)
  const { CURRENT_PAGE, HEADER_TEMPLATE } = getPageInfos()

  function toggleMenu() {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // eslint-disable-next-line no-restricted-globals
      setOpenHeader(scrollY < innerHeight)
    })
  }, [])

  const headerColor = (HEADER_TEMPLATE === 'primary' && openHeader)
  || (CURRENT_PAGE === 'listing' && !openHeader)
    ? 'white'
    : 'black'

  return (
    <Container
      as={HeaderWrapper}
      CURRENT_PAGE={CURRENT_PAGE}
      headerColor={headerColor}
      openHeader={openHeader}
    >
      <Logowrapper />
      <ToggleModalButton
        onClick={toggleMenu}
        icon='bars'
        as={ToggleMenuButton}
      />
      <Navigation
        openMenu={openMenu}
        toggleMenu={toggleMenu}
      />
      {/* <SearchWrapper /> */}
    </Container>
  )
}
