import React from 'react'
import styled, { css } from 'styled-components'
import { StructuredText, renderNodeRule } from 'react-datocms'
import { isCode, isLink, isHeading } from 'datocms-structured-text-utils'
import LinkButton from '../Common/LinkButton'
import CodeBlock from './CodeBlock'
import { simplifyString } from '../../utils/simplifyString'
import Icon from '../Common/Icon'
import Image from '../Common/Image'
import Iframe from './Iframe'
import Table from './Table'
// eslint-disable-next-line import/no-cycle
import TextBox from './TextBox'
import getBreakpoints from '../../utils/getBreakpoints'

const Title = styled.h2`
  ${ getBreakpoints({
    xs: css`scroll-margin-top: 1.5rem;`,
    sm: css`scroll-margin-top: 2rem;`,
    md: css`scroll-margin-top: 2.5rem;`
  }) }

  &:hover {
    span:nth-child(2) {
      color: ${ ({ theme }) => theme.color.neutral_500 };
    }
  }

  a {
    text-decoration: none;
    text-decoration-color: ${ ({ theme }) => theme.color.neutral_50 };
    transition: ${ ({ theme }) => theme.transition.fast };

    &:hover {
      text-decoration: underline;
      text-decoration-style: dotted;
      text-decoration-color: ${ ({ theme }) => theme.color.neutral_500 };
    }
  }
`

const TitleLink = styled.a`
  position: relative;
  display: inline-block;
  text-underline-offset: 0.3rem;
`

const TitleIcon = styled.span`
  position: absolute;
  z-index: 1;
  transform: translate(-100%, -50%);
  top: 50%;
  left: 0;
  font-size: ${ ({ theme }) => theme.fontSize.h4 };
  color: transparent;
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
          <span>{node.children[0].value}</span>
          <TitleIcon>
            <Icon name='link' />
          </TitleIcon>
        </TitleLink>
      </Title>
    )
  }

  function handleBlock({ record }) {
    // eslint-disable-next-line no-underscore-dangle
    switch (record.__typename) {
    case 'ImageRecord':
      return (
        <Image
          key={record.image.alt}
          src={record.image.responsiveImage.src}
          width={record.image.width}
          alt={record.image.alt}
          title={record.image.title}
        />
      )
    case 'VideoRecord':
      return (
        <Iframe
          key={record.video.title}
          title={record.video.title}
          videoID={record.video.providerUid}
        />
      )
    case 'TableRecord':
      return (
        <Table
          key={record.tableTitle}
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
          <footer>{record.author}</footer>
        </blockquote>
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
