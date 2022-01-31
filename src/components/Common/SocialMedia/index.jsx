import React from 'react'
import styled from 'styled-components'
import { SOCIAL_MEDIA } from '../../../settings'
import Icon from '../Icon'
import LinkButton from '../LinkButton'

const SocialMediaWrapper = styled.nav`
  margin: ${ ({ center }) => center ? '0 auto' : '0' };
`

const SocialList = styled.ul`
  display: flex;
  justify-content: space-around;
`

export default function SocialMedia({ center }) {
  const socialElements = SOCIAL_MEDIA.map(socialMedia => (
    <li key={socialMedia.title}>
      <LinkButton href={socialMedia.url} external>
        <Icon name={socialMedia.title} />
      </LinkButton>
    </li>
  ))

  return (
    <SocialMediaWrapper center={center}>
      <SocialList>
        {socialElements}
      </SocialList>
    </SocialMediaWrapper>
  )
}
