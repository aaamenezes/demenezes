import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav``

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`

const NavItem = styled.li``
const NavLink = styled.a`
  display: block;
  padding: 20px 5%;
  border-bottom: 1px solid ${ ({ theme }) => theme.color.gray };
`

export default function Navigation({ closeButton }) {
  return (
    <Nav>
      <NavList>
        {
          closeButton && (
            <NavItem>
              <NavLink>&nbsp;</NavLink>
            </NavItem>
          )
        }
        <NavItem>
          <NavLink href='/'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/about'>Sobre</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='contact'>Contato</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  )
}
