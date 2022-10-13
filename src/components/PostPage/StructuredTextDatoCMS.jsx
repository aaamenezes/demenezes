import React from 'react'
import styled, { css } from 'styled-components'
import { StructuredText, renderNodeRule } from 'react-datocms'
import { isCode, isLink, isHeading } from 'datocms-structured-text-utils'
import LinkButton from '../Common/LinkButton'
import CodeBlock from './CodeBlock'
import { simplifyString } from '../../utils/simplifyString'
import Image from '../Common/Image'
import Iframe from './Iframe'
import Table from './Table'
// eslint-disable-next-line import/no-cycle
import TextBox from './TextBox'
import getBreakpoints from '../../utils/getBreakpoints'
import Video from './Video'

const Title = styled.h2`
  ${ getBreakpoints({
    xs: css`scroll-margin-top: 1.5rem;`,
    sm: css`scroll-margin-top: 2rem;`,
    md: css`scroll-margin-top: 2.5rem;`
  }) }
`

const TitleLink = styled.a`
  display: block;
  text-decoration-color: ${ ({ theme }) => theme.color.transparent };
  text-underline-offset: ${ ({ theme }) => `${ theme.spacing.small }rem` };
  text-decoration-style: dotted;
  transition: ${ ({ theme }) => theme.transition.fast };

  &::before {
    content: '#';
    display: inline-block;
    margin-right: ${ ({ theme }) => `${ theme.spacing.small }rem` };
    font-size: ${ ({ theme }) => theme.fontSize.h4 };
    text-decoration: none;
    color: ${ ({ theme }) => theme.color.neutral_500 };
    opacity: 0;
    transition: ${ ({ theme }) => theme.transition.fast };
  }

  &:hover {
    text-decoration-color: ${ ({ theme }) => theme.color.neutral_500 };

    &::before {
      opacity: 1;
    }
  }
`

export default function StructuredTextDatoCMS({ data }) {
  function handleLink({ node }) {
    return (
      <LinkButton
        key={`${ node.children[0].value } - ${ node.url }`}
        href={node.url}
        external={node.meta && node.meta[0].value === '_blank'}
        inline
      >
        {node.children[0].value}
      </LinkButton>
    )
  }

  function handleCode({ node }) {
    return (
      <CodeBlock key={node.code + Math.random()} language={node.language}>
        {node.code}
      </CodeBlock>
    )
  }

  function handleHeading({ node }) {
    const id = simplifyString(node.children[0].value)

    return (
      <Title
        key={node.children[0].value + Math.random()}
        as={`h${ node.level }`}
        id={id}
      >
        <TitleLink href={`#${ id }`}>
          {node.children[0].value}
        </TitleLink>
      </Title>
    )
  }

  function handleBlock({ record }) {
    const { __typename } = record
    switch (__typename) {
    case 'ImageRecord':
      return (
        <Image
          key={record.id}
          src={record.image.responsiveImage.src}
          width={record.image.width}
          alt={record.image.alt}
          title={record.image.title}
        />
      )
    case 'ExternalVideoRecord':
      return (
        <Iframe
          key={record.id}
          title={record.video.title}
          videoID={record.video.providerUid}
        />
      )
    case 'VideoRecord':
      return (
        // <div></div>
        <Video
          key={record.id}
          url={record.video.url}
          alt={record.video.alt}
        />
      )
    case 'TableRecord':
      return (
        <Table
          key={record.id}
          tableTitle={record.tableTitle}
          tableSummary={record.tableSummary}
          tableContent={record.table}
        />
      )
    case 'TextBoxRecord':
      return (
        <TextBox
          key={Math.random()}
          content={record.textBoxContent}
        />
      )
    case 'BlockquoteRecord':
      return (
        <blockquote cite={record.source}>
          <StructuredTextDatoCMS data={record.quoteContent} />
          {record.author && (
            <footer>{record.author}</footer>
          )}
        </blockquote>
      )
    case 'TweetRecord':
      return (
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: record.tweetEmbedCodeblock }}
          />
        </div>
      )
    default:
      return null
    }
  }

  return (
    <StructuredText
      data={data}
      customNodeRules={[
        renderNodeRule(isLink, handleLink),
        renderNodeRule(isCode, handleCode),
        renderNodeRule(isHeading, handleHeading)
      ]}
      renderBlock={handleBlock}
    />
  )
}
