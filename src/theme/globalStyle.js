import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: ${ ({ theme }) => theme.fontSize.base.mobile };
    font-family: ${ ({ theme }) => theme.fontFamily.text };
    line-height: 1;
    color: ${ ({ theme }) => theme.color.black };
    background-color: ${ ({ theme }) => theme.color.white };
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
    font-size: ${ ({ theme }) => theme.fontSize.pageTitle };
    font-family: ${ ({ theme }) => theme.fontFamily.title };
  }

  h2 {
    font-size: ${ ({ theme }) => theme.fontSize.sectionTitle };
    font-family: ${ ({ theme }) => theme.fontFamily.title };
  }

  h3 {
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
