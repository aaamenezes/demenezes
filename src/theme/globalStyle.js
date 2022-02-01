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
      font-weight: ${ ({ theme }) => theme.fontWeight.text };
      font-family: ${ ({ theme }) => theme.fontFamily.text };
      line-height: 1.7;
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

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

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
    font-size: ${ ({ theme }) => theme.fontSize.h1 };
    font-weight: ${ ({ theme }) => theme.fontWeight.h1 };
    font-family: ${ ({ theme }) => theme.fontFamily.h1 };
  }

  h2 {
    margin-bottom: ${ getGutter(10) };
    text-align: center;
    font-size: ${ ({ theme }) => theme.fontSize.h2 };
    font-weight: ${ ({ theme }) => theme.fontWeight.h2 };
    font-family: ${ ({ theme }) => theme.fontFamily.h2 };
  }

  h3 {
    text-align: left;
    font-size: ${ ({ theme }) => theme.fontSize.h3 };
    font-weight: ${ ({ theme }) => theme.fontWeight.h3 };
    font-family: ${ ({ theme }) => theme.fontFamily.h3 };
  }

  h4 {
    text-align: left;
    font-size: ${ ({ theme }) => theme.fontSize.h4 };
    font-weight: ${ ({ theme }) => theme.fontWeight.h4 };
    font-family: ${ ({ theme }) => theme.fontFamily.h4 };
  }

  a {
    color: currentColor;
  }

  strong {
    font-weight: ${ ({ theme }) => theme.fontWeight.text };
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
    background-color: transparent;
  }
`
