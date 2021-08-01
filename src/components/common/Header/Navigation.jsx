import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import LinkButton from '../LinkButton'

const NavList = styled.ul`
  list-style: none;
`

const NavItem = styled.li`
  border-bottom: 1px solid ${ ({ theme }) => theme.color.gray };

  &:first-child {
    margin-top: 52px;
  }
`

export default function Navigation() {
  const router = useRouter()

  const navigationList = [
    { title: 'Home', url: '/' },
    { title: 'Sobre', url: '/about' },
    { title: 'Contato', url: '/contact' }
  ]

  const navigationElements = navigationList.map(menu => {
    const currentPage = router.pathname === menu.url

    return (
      <NavItem>
        <LinkButton
          href={menu.url}
          style={{
            display: 'block',
            padding: '20px 5%',
            color: currentPage ? 'white' : 'initial',
            backgroundColor: currentPage ? 'darkred' : 'initial'
          }}
        >
          {menu.title}
        </LinkButton>
      </NavItem>
    )
  })

  return (
    <nav>
      <NavList>
        {navigationElements}
      </NavList>
    </nav>
  )
}
