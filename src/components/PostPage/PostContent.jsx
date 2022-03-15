import React, { useEffect } from 'react'
import Prism from 'prismjs'
import { StructuredText, renderNodeRule } from 'react-datocms'
import { isCode, isLink, isHeading } from 'datocms-structured-text-utils'
import styled from 'styled-components'
import Container from '../Common/Container'
import LinkButton from '../Common/LinkButton'
import CodeBlock from './CodeBlock'
import Image from '../Common/Image'
import Iframe from './Iframe'
import Table from './Table'
import { simplifyString } from '../../utils/simplifyString'
import Icon from '../Common/Icon'

const StyledPostContent = styled.div`
  overflow: hidden;
`

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

const TitleIcon = styled.span`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 100%;
  display: none;
  font-size: ${ ({ theme }) => theme.fontSize.h4 };
  color: ${ ({ theme }) => theme.color.neutral_400 };
`

export default function PostContent({ post }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [ post ])

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
      <CodeBlock key={node.code} language={node.language}>
        {node.code}
      </CodeBlock>
    )
  }

  function handleHeading({ node }) {
    const id = simplifyString(node.children[0].value)
    return (
      <Title as={`h${ node.level }`} id={id}>
        <a href={`#${ id }`}>
          {node.children[0].value}
        </a>
        <TitleIcon>
          <Icon name='link' />
        </TitleIcon>
      </Title>
    )
  }

  function handleBlock({ record }) {
    switch (record.__typename) {
    case 'ImageRecord':
      return (
        <Image
          srcSet={record.image.responsiveImage.srcSet}
          alt={record.image.alt}
        />
      )
    case 'VideoRecord':
      return (
        <Iframe
          title={record.video.title}
          videoID={record.video.providerUid}
        />
      )
    case 'TableRecord':
      return (
        <Table
          data={record.table}
          firstColumnHighlight={record.firstColumnHighlight}
        />
      )
    default:
      return null
    }
  }

  return (
    <Container as={StyledPostContent} width='lg' spacing='0'>
      <StructuredText
        data={post.data.post.content}
        customNodeRules={[
          renderNodeRule(isLink, handleLink),
          renderNodeRule(isCode, handleCode),
          renderNodeRule(isHeading, handleHeading)
        ]}
        renderBlock={handleBlock}
      />
    </Container>
  )
}
