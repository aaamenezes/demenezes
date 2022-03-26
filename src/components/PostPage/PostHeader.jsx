import React from 'react'
import styled, { css } from 'styled-components'
import { convertDate } from '../../utils/convertDate'
import getBreakpoints from '../../utils/getBreakpoints'
import Container from '../Common/Container'

const StyledPostHeader = styled.header`
  padding-top: 6.6rem;
  padding-bottom: 3rem;
  margin-bottom: 10%;
  color: ${ ({ theme }) => theme.color.neutral_100 };
  background-image: ${ ({ theme, bgImage }) => (`
    linear-gradient(
      ${ theme.color.red_700 + theme.opacity.hard.hex } 100%,
      ${ theme.color.red_700 + theme.opacity.hard.hex } 100%
    ),
    url(${ bgImage })
  `) };
`

const PostTitle = styled.h1`
  margin-bottom: ${ ({ theme }) => `${ theme.spacing.h1 }rem` };
`

const LeadText = styled.p`
  ${ getBreakpoints({
    xs: css`
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.text }rem` };
      line-height: ${ ({ theme }) => theme.lineHeight.text };
      font-size: ${ ({ theme }) => theme.fontSize.text };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.text };
      text-align: center;

      strong {
        font-weight: ${ ({ theme }) => theme.fontWeight.text };
      }
    `,
    md: css`
      line-height: ${ ({ theme }) => theme.lineHeight.h4 };
      font-size: ${ ({ theme }) => theme.fontSize.h4 };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.h4 };
    `
  }) }
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

const PostDate = styled.span`
  ${ getBreakpoints({
    xs: css`
      display: block;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      font-size: ${ ({ theme }) => theme.fontSize.small };
    `,
    md: css`
      display: inline-block;

      &:not(:last-of-type) {
        margin-right: 0.3rem;

        &&:after {
          content: ' - ';
        }
      }
    `
  }) }
`

const KeywordsList = styled.ul`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      list-style: none;
      margin: 0.5rem 0 0;

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
  color: ${ ({ theme }) => theme.color.neutral_100 };
  background-color: ${ ({ theme }) => theme.color.red_900 };
`

export default function PostHeader({
  title,
  description,
  date,
  update,
  category,
  keywords,
  coverImage
}) {
  const keywordsList = keywords.split(',').map(keyword => (
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
        <PostDate>
          {(update && 'Publicado em ') + convertDate(date)}
        </PostDate>
        {update && (
          <PostDate>{`Atualizado em ${ convertDate(update) }`}</PostDate>
        )}
        <PostDate>{ category }</PostDate>
        <KeywordsList>{keywordsList}</KeywordsList>
      </PostHeaderFooter>
    </Container>
  )
}
