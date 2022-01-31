import { createGlobalStyle, css } from 'styled-components'
import getBreakpoints from '../utils/getBreakpoints'
import { getGutter } from '../utils/getGutter'

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    ${ getBreakpoints({
    xs: css`
      font-size: ${ ({ theme }) => theme.fontSize.base.xs };
      font-family: ${ ({ theme }) => theme.fontFamily.text };
      line-height: 1.2;
      color: ${ ({ theme }) => theme.color.black };
      background-color: ${ ({ theme }) => theme.color.white };
    `,
    sm: css`
      font-size: ${ ({ theme }) => theme.fontSize.base.sm };
    `,
    md: css`
      font-size: ${ ({ theme }) => theme.fontSize.base.md };
    `,
    lg: css`
      font-size: ${ ({ theme }) => theme.fontSize.base.lg };
    `,
    xl: css`
      font-size: ${ ({ theme }) => theme.fontSize.base.xl };
    `
  }) }
  }

  /* #__next {
    min-height: 100vh;
  } */

  nav {
    font-size: ${ ({ theme }) => theme.fontSize.text }
  }

  ul {
    font-size: ${ ({ theme }) => theme.fontSize.text };
    list-style: none;
  }

  li {
    font-size: ${ ({ theme }) => theme.fontSize.text };
  }

  h1 {
    margin-bottom: ${ getGutter(10) };
    text-align: center;
    font-size: ${ ({ theme }) => theme.fontSize.pageTitle };
    font-family: ${ ({ theme }) => theme.fontFamily.title };
  }

  h2 {
    margin-bottom: ${ getGutter(10) };
    text-align: left;
    font-size: ${ ({ theme }) => theme.fontSize.sectionTitle };
    font-family: ${ ({ theme }) => theme.fontFamily.title };
  }

  h3 {
    text-align: left;
    font-size: ${ ({ theme }) => theme.fontSize.articleTitle };
    font-family: ${ ({ theme }) => theme.fontFamily.title };
  }

  p {
    font-size: ${ ({ theme }) => theme.fontSize.text };
  }

  span {
    font-size: ${ ({ theme }) => theme.fontSize.text };
  }

  a {
    font-size: ${ ({ theme }) => theme.fontSize.text };;
    text-decoration: none;
    color: currentColor;
  }

  i {
    font-size: ${ ({ theme }) => theme.fontSize.text };
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
