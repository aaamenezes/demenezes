/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled, { css } from 'styled-components';
import { StructuredText, renderNodeRule } from 'react-datocms';
import { isCode, isLink, isHeading } from 'datocms-structured-text-utils';
import LinkButton from '../atoms/LinkButton';
import CodeBlock from '../atoms/CodeSnippet';
import { simplifyString } from '../../utils/simplifyString';
import Figure from '../atoms/Image';
import Iframe from './Iframe';
import Table from './Table';
import TextBox from './TextBox';
import Video from './Video';
import BlockQuote from '../Common/BlockQuote';
import Quiz from './Quiz';
import getBreakpoints from '../../utils/getBreakpoints';

const Title = styled.h2`
  ${getBreakpoints({
    xs: css`
      scroll-margin-top: 1.5rem;
    `,
    sm: css`
      scroll-margin-top: 2rem;
    `,
    md: css`
      scroll-margin-top: 2.5rem;
    `,
  })}
` as React.FC<{
  as: string;
  children: React.ReactNode;
  id: string;
}>;

const TitleLink = styled.a`
  display: block;
  text-decoration-color: ${({ theme }) => theme.color.transparent};
  text-underline-offset: ${({ theme }) => `${theme.spacing.small}rem`};
  text-decoration-style: dotted;
  transition: ${({ theme }) => theme.transition.fast};

  &::after {
    content: '#';
    display: inline-block;
    margin-left: ${({ theme }) => `${theme.spacing.small}rem`};
    vertical-align: middle;
    font-size: ${({ theme }) => theme.fontSize.h4};
    text-decoration: none;
    color: ${({ theme }) => theme.color.neutral_500};
    opacity: 0;
    transition: ${({ theme }) => theme.transition.fast};
  }

  &:hover,
  &:focus {
    text-decoration-color: ${({ theme }) => theme.color.neutral_500};

    &::after {
      opacity: 1;
    }
  }
`;

const TextLink = styled(LinkButton)`
  text-decoration-line: underline;

  &:hover,
  &:focus {
    text-decoration-thickness: 3px;
  }
`;

export default function StructuredTextDatoCMS({ data }: { data: any }) {
  function handleLink({ node }: any) {
    return (
      <TextLink
        as={TextLink}
        key={`${node.children[0].value} - ${node.url}`}
        href={node.url}
        external={node.meta && node.meta[0].value === '_blank'}
        inline
      >
        {node.children[0].value}
      </TextLink>
    );
  }

  function handleCode({ node }: { node: any }) {
    return (
      <CodeBlock key={node.code + Math.random()} language={node.language}>
        {node.code}
      </CodeBlock>
    );
  }

  function handleHeading({ node }: any) {
    const id = simplifyString(node.children[0].value);

    return (
      <Title
        key={node.children[0].value + Math.random()}
        as={`h${node?.level || 2}`}
        id={id}
      >
        <TitleLink href={`#${id}`}>{node.children[0].value}</TitleLink>
      </Title>
    );
  }

  function handleBlock({
    record,
  }: {
    record: {
      __typename: string;
      id: string;
      [key: string]: any;
    };
  }) {
    const { __typename } = record;
    switch (__typename) {
      case 'ImageRecord':
        return (
          <Figure
            key={record.id}
            src={record.image.responsiveImage.src}
            width={record.image.width}
            height={record.image.height}
            alt={record.image.alt}
            title={record.image.title}
          />
        );
      case 'ExternalVideoRecord':
        return (
          <Iframe
            key={record.id}
            title={record.video.title}
            videoID={record.video.providerUid}
          />
        );
      case 'VideoRecord':
        return (
          <Video
            key={record.id}
            url={record.video.url}
            alt={record.video.alt}
          />
        );
      case 'TableRecord':
        return (
          <Table
            key={record.id}
            tableTitle={record.tableTitle}
            tableSummary={record.tableSummary}
            tableContent={record.table}
          />
        );
      case 'TextBoxRecord':
        return <TextBox key={Math.random()} content={record.textBoxContent} />;
      case 'BlockquoteRecord':
        return (
          <BlockQuote source={record.source} author={record.author} isDatoCMS>
            {record.quoteContent}
          </BlockQuote>
        );
      case 'TweetRecord':
        return (
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: record.tweetEmbedCodeblock }}
            />
          </div>
        );
      case 'QuizRecord':
        return (
          <Quiz
            title={record.title}
            alternatives={[
              record.alternativeOne,
              record.alternativeTwo,
              record.alternativeThree,
              record.alternativeFour,
            ]}
            correctAlternativeIndex={record.correctAlternativeIndex}
          />
        );
      default:
        return null;
    }
  }

  return (
    <StructuredText
      data={data}
      customNodeRules={[
        renderNodeRule(isLink, handleLink),
        renderNodeRule(isCode, handleCode),
        renderNodeRule(isHeading, handleHeading),
      ]}
      renderBlock={handleBlock}
    />
  );
}
