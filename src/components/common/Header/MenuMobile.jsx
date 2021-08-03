import React from 'react'
import styled from 'styled-components'
import CloseModalButton from '../CloseModalButton'
import SocialMedia from '../SocialMedia'
import Navigation from './Navigation'

const Menu = styled.div`
  position: fixed;
  z-index: ${ ({ theme }) => theme.zIndex.fixed };
  top: 0;
  left: ${ ({ openMenu }) => (openMenu ? '0' : '100%') };
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: ${ ({ theme }) => theme.color.white };
  transition: ${ ({ theme }) => theme.transition.medium };
`

export default function MenuMobile({ openMenu, toggleMenu }) {
  return (
    <Menu openMenu={openMenu}>
      <CloseModalButton handleClick={toggleMenu} />
      <Navigation />
      <SocialMedia />
    </Menu>
  )
}
