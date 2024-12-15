import React from 'react'
import styled, { css } from 'styled-components'
import settings from '../../../settings.json'
import getBreakpoints from '../../utils/getBreakpoints'
import Icon from './Icon'
import LinkButton from './LinkButton'

const SocialMediaWrapper = styled.nav`
  margin: ${({ center }) => center ? '0 auto' : '0'};
`

const SocialList = styled.ul`
  ${getBreakpoints({
  xs: css`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      list-style: none;
      margin: 0;
      font-size: ${({ theme }) => theme.fontSize.text};
      margin-bottom: ${({ theme }) => `${theme.spacing.h1}rem`};
    `,
  md: css`
      flex-direction: row;
      margin-bottom: 0;
    `
})}
`

const SocialItem = styled.li`
  ${getBreakpoints({
  xs: css`
      &:not(:last-child) {
        margin-bottom: ${({ theme }) => `${theme.spacing.text}rem`};
      }
    `,
  md: css`
      &:not(:last-child) {
        margin-bottom: 0;
        margin-right: ${({ theme }) => `${theme.spacing.text}rem`};
      }
    `
})}
`

const SocialLink = styled.a`
  &:focus {
    outline: 4px dashed #9BA5AA;
  }
`

const SocialLabel = styled.span`
  display: block;
  margin-top: 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.neutral_500};
`

export default function SocialMedia({ center }) {
  const socialElements = settings.socialMedia.map(socialMedia => (
    <SocialItem key={socialMedia.title}>
      <LinkButton
        as={SocialLink}
        href={socialMedia.url}
        ariaLabel={`Acessar o ${socialMedia.title} do autor do blog`}
        external
      >
        <Icon name={socialMedia.title} />
        <SocialLabel>
          {socialMedia.title}
        </SocialLabel>
      </LinkButton>
    </SocialItem>
  ))

  return (
    <SocialMediaWrapper center={center}>
      <SocialList>
        {socialElements}
      </SocialList>
    </SocialMediaWrapper>
  )
}
