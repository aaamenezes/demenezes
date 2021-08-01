import styled from 'styled-components'
import Navigation from './Navigation'

const Menu = styled.div`
  position: fixed;
  z-index: ${ ({ theme }) => theme.zIndex.fixed };
  top: 0;
  left: ${ ({ openMenu }) => openMenu ? '0' : '100%' };
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${ ({ theme }) => theme.color.white };
  transition: ${ ({ theme }) => theme.transition.medium };
`

const CloseButton = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  text-align: center;
  background-color: ${ ({ theme }) => theme.color.gray };
  cursor: pointer;
`

export default function MenuMobile({ openMenu, setOpenMenu }) {
  return (
    <Menu openMenu={openMenu}>
      <CloseButton onClick={() => setOpenMenu(!openMenu)}>
        &times;
      </CloseButton>
      <Navigation closeButton />
      {/* <SocialMedia /> */}
    </Menu>
  )
}