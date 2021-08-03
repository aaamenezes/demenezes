import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import LinkButton from '../LinkButton'

const NavItem = styled.li`
  border-bottom: 1px solid ${ ({ theme }) => theme.color.gray };

  &:first-child {
    margin-top: 52px;
  }
`

const NavLink = styled(LinkButton)`
  ${ ({ theme, currentPage }) => ({
    display: 'block',
    padding: '20px 5%',
    color: currentPage ? theme.color.white : theme.color.black,
    backgroundColor: currentPage ? theme.color.red : theme.color.white
  }) }
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
      <NavItem key={menu.title}>
        <NavLink
          href={menu.url}
          currentPage={currentPage}
        >
          {menu.title}
        </NavLink>
      </NavItem>
    )
  })

  return (
    <nav>
      <ul>
        {navigationElements}
      </ul>
    </nav>
  )
}
