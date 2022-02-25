import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Navigation from './Navigation'
import ToggleModalButton from './ToggleModalButton'
import Container from '../Container'
import Logowrapper from '../LogoWrapper'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getPageInfos } from '../../../utils/getPageInfos'

const HeaderWrapper = styled.header`
  position: fixed;
  transform: ${ ({ openHeader }) => (
    openHeader ? 'translate(-50%, 0)' : 'translate(-50%, -110%)'
  ) };
  z-index: ${ ({ theme }) => theme.zIndex.fixed };
  top: 0;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.66rem;
  padding-bottom: 0.66rem;
  color: ${ ({ theme, headerColor }) => theme.color[headerColor] };
  background-color: ${ ({ theme, CURRENT_PAGE }) => (
    (CURRENT_PAGE === 'listing' || CURRENT_PAGE === 'post') && (
      theme.color.neutral_900 + theme.opacity.hard.hex
    )
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
      setOpenHeader(window.scrollY < window.innerHeight)
    })
  }, [])

  const headerColor = (HEADER_TEMPLATE === 'primary' && openHeader)
  || (CURRENT_PAGE === 'listing' && !openHeader)
    ? 'neutral_50'
    : 'neutral_900'

  return (
    <Container
      as={HeaderWrapper}
      width='xxxl'
      fluid
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
