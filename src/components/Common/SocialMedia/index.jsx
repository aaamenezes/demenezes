import React from 'react'
import styled, { css } from 'styled-components'
import { SOCIAL_MEDIA } from '../../../settings'
import getBreakpoints from '../../../utils/getBreakpoints'
import { getGutter } from '../../../utils/getGutter'
import Icon from '../Icon'
import LinkButton from '../LinkButton'

const SocialMediaWrapper = styled.nav`
  width: 100%;
  max-width: ${ getGutter(100) };
  padding: ${ getGutter(5, 0) };
  margin: ${ ({ center }) => center && '0 auto' };
`

const SocialList = styled.ul`
  display: flex;
  justify-content: space-around;
`

const SocialIcon = styled.i`
  ${ getBreakpoints({
    xs: css``,
    md: css``
  }) }
`

export default function SocialMedia({ center }) {
  const socialElements = SOCIAL_MEDIA.map(socialMedia => (
    <li key={socialMedia.title}>
      <LinkButton href={socialMedia.url} external>
        <Icon as={SocialIcon} name={socialMedia.title} />
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
