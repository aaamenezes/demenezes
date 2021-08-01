import React from 'react'
import styled from 'styled-components'

const SocialMediaWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  /* justify-content: space-evenly; */
  padding: 20px 5%;
`

const Icon = styled.div`
  width: 30px;
  height: 30px;
`

export default function SocialMedia() {
  return (
    <SocialMediaWrapper>
      <Icon>G</Icon>
      <Icon>L</Icon>
      <Icon>T</Icon>
    </SocialMediaWrapper>
  )
}
