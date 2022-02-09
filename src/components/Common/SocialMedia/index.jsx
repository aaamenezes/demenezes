import React from 'react'
import styled from 'styled-components'
import settings from '../../../../settings.json'
import HiddenA11Y from '../HiddenA11Y'
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
  const socialElements = settings.SOCIAL_MEDIA.map(socialMedia => (
    <li key={socialMedia.title}>
      <LinkButton href={socialMedia.url} external>
        <Icon name={socialMedia.title} />
        <HiddenA11Y>
          Link para a rede social
          {' '}
          {socialMedia.title}
        </HiddenA11Y>
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
