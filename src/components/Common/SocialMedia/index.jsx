import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../../../utils/getGutter'
import Icon from '../Icon'
import LinkButton from '../LinkButton'

const SocialMediaWrapper = styled.nav`
  width: 100%;
  max-width: ${ getGutter(100) };
  padding: ${ getGutter(5, '5%') };
`

const SocialList = styled.ul`
  display: flex;
  justify-content: space-around;
`

export default function SocialMedia() {
  const socialMedias = [
    { title: 'github', url: 'https://github.com/aaamenezes' },
    { title: 'linkedin', url: 'https://www.linkedin.com/in/aaamenezes' },
    { title: 'twitter', url: 'https://twitter.com/aaamenezes' },
    { title: 'instagram', url: 'https://instagram.com/aaamenezes' }
  ]

  const socialElements = socialMedias.map(socialMedia => (
    <li key={socialMedia.title}>
      <LinkButton href={socialMedia.url} external>
        <Icon name={socialMedia.title} />
      </LinkButton>
    </li>
  ))

  return (
    <SocialMediaWrapper>
      <SocialList>
        {socialElements}
      </SocialList>
    </SocialMediaWrapper>
  )
}
