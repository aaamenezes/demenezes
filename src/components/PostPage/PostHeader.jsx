import React from 'react'
import styled from 'styled-components'
import { convertDate } from '../../utils/convertDate'
import { getGutter } from '../../utils/getGutter'
import Container from '../Common/Container'
import Title from '../Common/Title'

const StyledPostHeader = styled.header`
  padding-top: ${ getGutter(30) };
  margin-bottom: 10%;
  color: ${ ({ theme }) => theme.color.white };
  background-image: ${ ({ theme }) => (
    `linear-gradient(
      to bottom,
      ${ theme.color.blackAlt + theme.opacity.hard.hex } calc(100% - 12vw),
      transparent calc(100% - 10vw)
    )`
  ) };
`

const Lead = styled.strong`
  display: block;
  line-height: ${ ({ theme }) => theme.lineHeight.h4 };
  font-size: ${ ({ theme }) => theme.fontSize.h4 };
  text-align: center;
`

const PostHeaderFooter = styled.footer`
  margin-bottom: ${ getGutter(10) };
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
    <Container as={StyledPostHeader} width='xxxl' fluid>
      <Title tag='h1'>{title}</Title>
      <Lead>{description}</Lead>
      <PostHeaderFooter>
        <p>{footerContent}</p>
      </PostHeaderFooter>
      <img src={coverImage} alt={`imagem de capa do post ${ title }`} />
    </Container>
  )
}
