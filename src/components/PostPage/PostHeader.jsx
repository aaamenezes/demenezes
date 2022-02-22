import React from 'react'
import styled, { css } from 'styled-components'
import { convertDate } from '../../utils/convertDate'
import getBreakpoints from '../../utils/getBreakpoints'
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
  ${ getBreakpoints({
    xs: css`
      text-align: center;
      font-size: ${ ({ theme }) => theme.fontSize.text };
    `,
    md: css`
      text-align: right;
    `
  }) }
`

const PostDate = styled.p`
  margin-bottom: ${ ({ theme }) => `${ theme.spacing.text }rem` };
`

const KeywordsList = styled.ul`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      > * {
        margin-bottom: 0.5rem;
      }

      > :not(:last-child) {
        margin-right: 0.5rem;
      }
    `,
    md: css`
      justify-content: flex-end;
    `
  }) }
`

const KeywordItem = styled.li`
  padding: 0.3rem 0.5rem;
  line-height: ${ ({ theme }) => theme.lineHeight.button };
  font-size: ${ ({ theme }) => theme.fontSize.small };
  color: ${ ({ theme }) => theme.color.white };
  background-color: ${ ({ theme }) => theme.color.redAlt9 };
`

export default function PostHeader({
  title,
  description,
  date,
  category,
  keywords,
  coverImage
}) {
  const footerContent = `${ convertDate(date) } - ${ category }`

  const keywordsList = keywords.map(keyword => (
    <KeywordItem key={keyword}>{ keyword }</KeywordItem>
  ))

  return (
    <Container as={StyledPostHeader} width='xxxl' bgImage={coverImage} fluid>
      <PostTitle>{title}</PostTitle>
      <LeadText>
        <strong>
          {description}
        </strong>
      </LeadText>
      <PostHeaderFooter>
        <PostDate>{footerContent}</PostDate>
        <KeywordsList>{keywordsList}</KeywordsList>
      </PostHeaderFooter>
    </Container>
  )
}
