import React from 'react'
import styled from 'styled-components'
import { getGutter } from '../../../utils/getGutter'
import Icon from '../Icon'
import LinkButton from '../LinkButton'

const SocialMediaWrapper = styled.nav`
  padding: ${ getGutter(5, '5%') };
`

const SocialList = styled.ul`
  display: flex;
  justify-content: space-around;
`

const SocialLink = styled(LinkButton)`
  display: block;
  padding: ${ getGutter(3, 4) };

  &:hover {
    i {
      transform: scale(1.5);
    }
  }
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
      <SocialLink href={socialMedia.url} external>
        <Icon name={socialMedia.title} />
      </SocialLink>
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
