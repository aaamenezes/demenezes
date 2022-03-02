import { createGlobalStyle, css } from 'styled-components'
import getBreakpoints from '../utils/getBreakpoints'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    ${ getBreakpoints({
    xs: css`font-size: ${ ({ theme }) => theme.fontSize.html.xs };`,
    sm: css`font-size: ${ ({ theme }) => theme.fontSize.html.sm };`,
    md: css`font-size: ${ ({ theme }) => theme.fontSize.html.md };`,
    lg: css`font-size: ${ ({ theme }) => theme.fontSize.html.lg };`,
    xl: css`font-size: ${ ({ theme }) => theme.fontSize.html.xl };`
  }) }
  }

  body {
    line-height: ${ ({ theme }) => theme.lineHeight.text };
    font-size: ${ ({ theme }) => theme.fontSize.text };
    font-weight: ${ ({ theme }) => theme.fontWeight.text };
    font-family: ${ ({ theme }) => theme.fontFamily.text };
    letter-spacing: ${ ({ theme }) => theme.letterSpacing.text };
    color: ${ ({ theme }) => theme.color.neutral_800 };
    background-color: ${ ({ theme }) => theme.color.neutral_50 };
  }

  /* Já pode tirar essa coisa daqui? */
  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  nav {
    line-height: ${ ({ theme }) => theme.lineHeight.button };
    font-size: ${ ({ theme }) => theme.fontSize.small };
  }

  h1, h2, h3, h4 {
    font-family: ${ ({ theme }) => theme.fontFamily.title };
  }

  h1 {
    ${ getBreakpoints({
    xs: css`
      text-align: center;
      line-height: ${ ({ theme }) => theme.lineHeight.h3 };
      font-size: ${ ({ theme }) => theme.fontSize.h3 };
      font-weight: ${ ({ theme }) => theme.fontWeight.h3 };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.h3 };
    `,
    sm: css`
      line-height: ${ ({ theme }) => theme.lineHeight.h2 };
      font-size: ${ ({ theme }) => theme.fontSize.h2 };
      font-weight: ${ ({ theme }) => theme.fontWeight.h2 };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.h2 };
    `,
    md: css`
      line-height: ${ ({ theme }) => theme.lineHeight.h1 };
      font-size: ${ ({ theme }) => theme.fontSize.h1 };
      font-weight: ${ ({ theme }) => theme.fontWeight.h1 };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.h1 };
    `
  }) }
  }

  h2 {
    ${ getBreakpoints({
    xs: css`
      margin-top: ${ ({ theme }) => `${ theme.spacing.h4 * 3 }rem` };
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.h4 }rem` };
      text-align: center;
      line-height: ${ ({ theme }) => theme.lineHeight.h4 };
      font-size: ${ ({ theme }) => theme.fontSize.h4 };
      font-weight: ${ ({ theme }) => theme.fontWeight.h4 };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.h4 };
    `,
    sm: css`
      margin-top: ${ ({ theme }) => `${ theme.spacing.h3 * 3 }rem` };
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.h3 }rem` };
      line-height: ${ ({ theme }) => theme.lineHeight.h3 };
      font-size: ${ ({ theme }) => theme.fontSize.h3 };
      font-weight: ${ ({ theme }) => theme.fontWeight.h3 };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.h3 };
    `,
    md: css`
      margin-top: ${ ({ theme }) => `${ theme.spacing.h2 * 3 }rem` };
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.h2 }rem` };
      line-height: ${ ({ theme }) => theme.lineHeight.h2 };
      font-size: ${ ({ theme }) => theme.fontSize.h2 };
      font-weight: ${ ({ theme }) => theme.fontWeight.h2 };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.h2 };
    `
  }) }
  }

  h3 {
    ${ getBreakpoints({
    xs: css`
      margin-top: ${ ({ theme }) => `${ theme.spacing.text * 3 }rem` };
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.text }rem` };
      text-align: left;
      line-height: ${ ({ theme }) => theme.lineHeight.text };
      font-size: ${ ({ theme }) => theme.fontSize.text };
      font-weight: ${ ({ theme }) => theme.fontWeight.h2 };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.text };
    `,
    sm: css`
      margin-top: ${ ({ theme }) => `${ theme.spacing.h4 * 3 }rem` };
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.h4 }rem` };
      line-height: ${ ({ theme }) => theme.lineHeight.h4 };
      font-size: ${ ({ theme }) => theme.fontSize.h4 };
      font-weight: ${ ({ theme }) => theme.fontWeight.h3 };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.h4 };
    `,
    md: css`
      margin-top: ${ ({ theme }) => `${ theme.spacing.h3 * 3 }rem` };
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.h3 }rem` };
      line-height: ${ ({ theme }) => theme.lineHeight.h3 };
      font-size: ${ ({ theme }) => theme.fontSize.h3 };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.h3 };
    `
  }) }
  }

  h4 {
    ${ getBreakpoints({
    xs: css`
      margin-top: ${ ({ theme }) => `${ theme.spacing.text * 3 }rem` };
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.text }rem` };
      text-align: left;
      line-height: ${ ({ theme }) => theme.lineHeight.text };
      font-size: ${ ({ theme }) => theme.fontSize.text };
      font-weight: ${ ({ theme }) => theme.fontWeight.h4 };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.text };
    `,
    md: css`
      margin-top: ${ ({ theme }) => `${ theme.spacing.h4 * 3 }rem` };
      margin-bottom: ${ ({ theme }) => `${ theme.spacing.h4 }rem` };
      line-height: ${ ({ theme }) => theme.lineHeight.h4 };
      font-size: ${ ({ theme }) => theme.fontSize.h4 };
      letter-spacing: ${ ({ theme }) => theme.letterSpacing.h4 };
    `
  }) }
  }

  ul {
    margin-left: 2rem;
  }

  p:not(:first-child):not(:last-child),
  ul:not(:first-child):not(:last-child) {
    margin-top: ${ ({ theme }) => `${ theme.spacing.text }rem` };
    margin-bottom: ${ ({ theme }) => `${ theme.spacing.text }rem` };
  }
  
  a {
    color: currentColor;
  }
  
  button {
    border: none;
    outline: none;
    font-size: ${ ({ theme }) => theme.fontSize.small };
    background-color: transparent;
  }

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    margin-top: ${ ({ theme }) => `${ theme.spacing.small }rem` };
    margin-bottom: ${ ({ theme }) => `${ theme.spacing.small }rem` };
    border: none;
    font-family: ${ ({ theme }) => theme.fontFamily.text };
    font-size: ${ ({ theme }) => theme.fontSize.small };
    color: ${ ({ theme }) => theme.color.neutral_800 };
    background-color: ${ ({ theme }) => theme.color.neutral_50 };

    &:focus {
      outline: none;
    }
  }
  
  strong {
    font-weight: ${ ({ theme }) => theme.fontWeight.h1 };
  }
  
  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }

  pre[class*="language-"] {
    padding: 2rem;
    border: none;
    border-radius: ${ ({ theme }) => theme.borderRadius };
  }

  code:not([class*="language-"]) {
    ${ getBreakpoints({
    xs: css`
      display: inline-block;
      padding: 0.2rem 0.5rem;
      border-radius: ${ ({ theme }) => theme.borderRadius };
      color: ${ ({ theme }) => theme.color.neutral_100 };
      background-color: ${ ({ theme }) => theme.color.neutral_800 };
    `,
    md: css`
      padding: 0.5rem;
      line-height: 1;
    `
  }) }
  }

  code[class*="language-"] {
    padding: 0.3rem;
  }
  
  img:not(:first-child):not(:last-child),
  iframe:not(:first-child):not(:last-child),
  pre[class*="language-"]:not(:first-child):not(:last-child) {
    margin-top: ${ ({ theme }) => `${ theme.spacing.h1 }rem` };
    margin-bottom: ${ ({ theme }) => `${ theme.spacing.h1 }rem` };
  }

  iframe {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
`
