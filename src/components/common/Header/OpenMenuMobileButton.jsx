import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 45px;
  height: 45px;
  padding: 8px;
  border: 0;
  background-color: ${ ({ theme }) => theme.color.white };
  border-radius: ${ ({ theme }) => theme.borderRadius };
  cursor: pointer;
`

const Path = styled.div`
  width: 90%;
  height: 5px;
  border-radius: ${ ({ theme }) => theme.borderRadius };
  background-color: ${ ({ theme }) => theme.color.red };
`

export default function OpenMenuMobileButton({ openMenu, setOpenMenu }) {
  return (
    <Button onClick={() => setOpenMenu(!openMenu)}>
      <Path />
      <Path />
      <Path />
    </Button>
  )
}
