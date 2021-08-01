import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    ${ ({ theme }) => ({
    fontSize: theme.fontSize.base.desktop,
    fontFamily: theme.fontFamily.text,
    lineHeight: 1.5,
    color: theme.color.black,
    backgroundColor: theme.color.white
  }) }
  }

  /* #__next {
    min-height: 100vh;
  } */

  h1 {
    ${ ({ theme }) => ({
    fontSize: theme.fontSize.pageTitle,
    fontFamily: theme.fontFamily.title
  }) }
  }

  h2 {
    ${ ({ theme }) => ({
    fontSize: theme.fontSize.sectionTitle,
    fontFamily: theme.fontFamily.title
  }) }
  }

  h3 {
    ${ ({ theme }) => ({
    fontSize: theme.fontSize.articleTitle,
    fontFamily: theme.fontFamily.title
  }) }
  }

  p {
    ${ ({ theme }) => ({
    fontSize: theme.fontSize.text
  }) }
  }

  ul {
    ${ ({ theme }) => ({
    fontSize: theme.fontSize.text
  }) }
  }

  li {
    ${ ({ theme }) => ({
    fontSize: theme.fontSize.text
  }) }
  }

  span {
    ${ ({ theme }) => ({
    fontSize: theme.fontSize.text
  }) }
  }

  a {
    ${ ({ theme }) => ({
    fontSize: theme.fontSize.text,
    textDecoration: 'none'
  }) }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }

  button {
    border: none;
    outline: none;
    background: transparent;
  }
`
