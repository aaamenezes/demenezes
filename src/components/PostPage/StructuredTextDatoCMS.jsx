import React from 'react'
import styled from 'styled-components'
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

const Title = styled.h2`
  position: relative;

  &:hover {
    span {
      display: block;
    }
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const TitleLink = styled.a`
  position: relative;
  display: inline-block;
`

const TitleIcon = styled.span`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 100%;
  display: none;
  font-size: ${ ({ theme }) => theme.fontSize.h4 };
  color: ${ ({ theme }) => theme.color.neutral_500 };
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
          srcSet={record.image.responsiveImage.srcSet}
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
          key={record.textBoxContent}
          content={record.textBoxContent}
        />
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
