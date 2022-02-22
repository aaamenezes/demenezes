import React from 'react'
import styled from 'styled-components'
import { convertDate } from '../../utils/convertDate'
import Container from '../Common/Container'

const StyledPostHeader = styled.header`
  padding-top: 6.6rem;
  padding-bottom: 3rem;
  margin-bottom: 10%;
  color: ${ ({ theme }) => theme.color.white };
  background-image: ${ ({ theme, bgImage }) => (`
    linear-gradient(
      ${ theme.color.redAlt9 + theme.opacity.medium.hex } 100%,
      ${ theme.color.redAlt9 + theme.opacity.medium.hex } 100%
    ),
    url(${ bgImage })
  `) };
`

const PostTitle = styled.h1`
  margin-bottom: ${ ({ theme }) => `${ theme.spacing.h1 }rem` };
`

const LeadText = styled.p`
  margin-bottom: ${ ({ theme }) => `${ theme.spacing.text }rem` };
  line-height: ${ ({ theme }) => theme.lineHeight.h4 };
  font-size: ${ ({ theme }) => theme.fontSize.h4 };
  text-align: center;

  strong {
    font-weight: ${ ({ theme }) => theme.fontWeight.text };
  }
`

const PostHeaderFooter = styled.footer`
  text-align: right;
  font-size: ${ ({ theme }) => theme.fontSize.text };
`

export default function PostHeader({
  title,
  description,
  date,
  category,
  coverImage
}) {
  const footerContent = `${ convertDate(date) } - ${ category }`

  return (
    <Container as={StyledPostHeader} width='xxxl' bgImage={coverImage} fluid>
      <PostTitle>{title}</PostTitle>
      <LeadText>
        <strong>
          {description}
        </strong>
      </LeadText>
      <PostHeaderFooter>
        <p>{footerContent}</p>
      </PostHeaderFooter>
    </Container>
  )
}
