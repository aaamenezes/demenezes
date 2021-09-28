import React from 'react'
import styled from 'styled-components'
import { convertDate } from '../../utils/convertDate'
import { getGutter } from '../../utils/getGutter'
import Container from '../Common/Container'

const StyledPostHeader = styled.header`
  min-height: 100vh;
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

const PostTitle = styled.h1`
  text-align: center;
`

const PostHeaderFooter = styled.footer`
  margin-bottom: ${ getGutter(10) };
  text-align: right;
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
    <Container as={StyledPostHeader}>
      <PostTitle>{title}</PostTitle>
      <h2>{description}</h2>
      <PostHeaderFooter>
        <p>{footerContent}</p>
      </PostHeaderFooter>
      <img src={coverImage} alt={`imagem de capa do post ${ title }`} />
    </Container>
  )
}
