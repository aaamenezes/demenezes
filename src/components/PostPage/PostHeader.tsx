// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled, { css } from 'styled-components';
import { convertDate } from '../../utils/convertDate';
import getBreakpoints from '../../utils/getBreakpoints';
import Container from '../Common/Container';
import Label from '../Common/Label';

const PostHeaderWrapper = styled.header<{
  bgImage: string;
}>`
  padding-top: 6.6rem;
  padding-bottom: 3rem;
  /* color: ${({ theme }) => theme.color.neutral_100}; */
  background-image: ${({ theme, bgImage }) => css`
    linear-gradient(
      ${theme.color.neutral_400 + theme.opacity.hard.hex} 100%,
      ${theme.color.neutral_400 + theme.opacity.hard.hex} 100%
    ),
    url(${bgImage})
  `};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const PostHeaderInner = styled.div`
  position: relative;
`;

const PostTitle = styled.h1`
  margin-bottom: ${({ theme }) =>
    css`
      ${theme.spacing.h1}rem
    `};
`;

const LeadText = styled.p`
  ${getBreakpoints({
    xs: css`
      margin-bottom: ${({ theme }) =>
        css`
          ${theme.spacing.text}rem
        `};
      line-height: ${({ theme }) => theme.lineHeight.text};
      font-size: ${({ theme }) => theme.fontSize.text};
      letter-spacing: ${({ theme }) => theme.letterSpacing.text};
      text-align: center;

      strong {
        font-weight: ${({ theme }) => theme.fontWeight.text};
      }
    `,
    md: css`
      line-height: ${({ theme }) => theme.lineHeight.h4};
      font-size: ${({ theme }) => theme.fontSize.h4};
      letter-spacing: ${({ theme }) => theme.letterSpacing.h4};
    `,
  })}
`;

const PostHeaderFooter = styled.footer`
  ${getBreakpoints({
    xs: css`
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.text};
    `,
    md: css`
      text-align: right;
    `,
  })}
`;

const PostDate = styled.span`
  ${getBreakpoints({
    xs: css`
      display: block;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      font-size: ${({ theme }) => theme.fontSize.small};
      font-family: ${({ theme }) => theme.fontFamily.display};
    `,
    md: css`
      display: inline-block;

      &:not(:last-of-type) {
        margin-right: 0.3rem;

        &::after {
          content: ' - ';
        }
      }
    `,
  })}
`;

const KeywordsList = styled.ul`
  ${getBreakpoints({
    xs: css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      list-style: none;
      margin: 0.5rem 0 0;
    `,
    md: css`
      justify-content: flex-end;
    `,
  })}
`;

const KeywordItem = styled.li`
  padding: 0.3rem 0.5rem;
  margin-bottom: 0.5rem;
  line-height: ${({ theme }) => theme.lineHeight.button};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.display};
  color: ${({ theme }) => theme.color.neutral_100};
  background-color: ${({ theme }) => theme.color.red_900};

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export default function PostHeader({
  title,
  description,
  date,
  update,
  category,
  keywords,
  coverImage,
}: {
  title: string;
  description: string;
  date: string;
  update: string;
  category: string;
  keywords: string;
  coverImage: string;
}) {
  const keywordsList = keywords.split(',').map(keyword => {
    const clearKeyword = keyword.trim();
    return <KeywordItem key={clearKeyword}>{clearKeyword}</KeywordItem>;
  });

  return (
    <Container as={PostHeaderWrapper} width="full" fluid bgImage={coverImage}>
      <Container as={PostHeaderInner} width="xxxl" spacing={0}>
        <PostTitle>{title}</PostTitle>
        <LeadText>
          <strong>{description}</strong>
        </LeadText>
        <PostHeaderFooter>
          <PostDate>
            {update && date
              ? `Publicado em ${convertDate(date)}`
              : 'Não publicado'}
          </PostDate>
          {update > date && (
            <PostDate>{`Atualizado em ${convertDate(update)}`}</PostDate>
          )}
          <KeywordsList>{keywordsList}</KeywordsList>
        </PostHeaderFooter>
        <Label>{category}</Label>
      </Container>
    </Container>
  );
}
