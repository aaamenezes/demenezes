// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createGlobalStyle, css } from 'styled-components';
import getBreakpoints from '../utils/getBreakpoints';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;

    /* ${getBreakpoints({
      xs: css`
        font-size: ${({ theme }) => theme.fontSize.html.xs};
      `,
      sm: css`
        font-size: ${({ theme }) => theme.fontSize.html.sm};
      `,
      md: css`
        font-size: ${({ theme }) => theme.fontSize.html.md};
      `,
      lg: css`
        font-size: ${({ theme }) => theme.fontSize.html.lg};
      `,
      xl: css`
        font-size: ${({ theme }) => theme.fontSize.html.xl};
      `,
    })} */

  ${getBreakpoints({
    sm: css`
      font-size: ${({ theme }) => theme.fontSize.html.xs};
    `,
    md: css`
      font-size: ${({ theme }) => theme.fontSize.html.sm};
    `,
    lg: css`
      font-size: ${({ theme }) => theme.fontSize.html.md};
    `,
    xl: css`
      font-size: ${({ theme }) => theme.fontSize.html.lg};
    `,
    xxl: css`
      font-size: ${({ theme }) => theme.fontSize.html.xl};
    `,
  })}
  }

  body {
    line-height: ${({ theme }) => theme.lineHeight.text};
    font-size: ${({ theme }) => theme.fontSize.text};
    font-weight: ${({ theme }) => theme.fontWeight.text};
    font-family: ${({ theme }) => theme.fontFamily.text};
    letter-spacing: ${({ theme }) => theme.letterSpacing.text};
    color: ${({ theme }) => theme.color.neutral_800};
    background-color: ${({ theme }) => theme.color.neutral_50};
  }

  nav {
    line-height: ${({ theme }) => theme.lineHeight.button};
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fontFamily.display};
  }

  h1 {
    ${getBreakpoints({
      xs: css`
        text-align: center;
        line-height: ${({ theme }) => theme.lineHeight.h3};
        font-size: ${({ theme }) => theme.fontSize.h3};
        font-weight: ${({ theme }) => theme.fontWeight.h3};
        letter-spacing: ${({ theme }) => theme.letterSpacing.h3};
      `,
      sm: css`
        line-height: ${({ theme }) => theme.lineHeight.h2};
        font-size: ${({ theme }) => theme.fontSize.h2};
        font-weight: ${({ theme }) => theme.fontWeight.h2};
        letter-spacing: ${({ theme }) => theme.letterSpacing.h2};
      `,
      md: css`
        line-height: ${({ theme }) => theme.lineHeight.h1};
        font-size: ${({ theme }) => theme.fontSize.h1};
        font-weight: ${({ theme }) => theme.fontWeight.h1};
        letter-spacing: ${({ theme }) => theme.letterSpacing.h1};
      `,
    })}
  }

  h2 {
    ${getBreakpoints({
      xs: css`
        margin-top: ${({ theme }) => `${theme.spacing.h4 * 2}rem`};
        margin-bottom: ${({ theme }) => `${theme.spacing.h4}rem`};
        text-align: center;
        line-height: ${({ theme }) => theme.lineHeight.h4};
        font-size: ${({ theme }) => theme.fontSize.h3};
        font-weight: ${({ theme }) => theme.fontWeight.h4};
        letter-spacing: ${({ theme }) => theme.letterSpacing.h4};
      `,
      sm: css`
        margin-top: ${({ theme }) => `${theme.spacing.h3 * 2}rem`};
        margin-bottom: ${({ theme }) => `${theme.spacing.h3}rem`};
        line-height: ${({ theme }) => theme.lineHeight.h3};
        font-size: ${({ theme }) => theme.fontSize.h3};
        font-weight: ${({ theme }) => theme.fontWeight.h3};
        letter-spacing: ${({ theme }) => theme.letterSpacing.h3};
      `,
      md: css`
        margin-top: ${({ theme }) => `${theme.spacing.h2 * 2}rem`};
        margin-bottom: ${({ theme }) => `${theme.spacing.h2}rem`};
        line-height: ${({ theme }) => theme.lineHeight.h2};
        font-size: ${({ theme }) => theme.fontSize.h2};
        font-weight: ${({ theme }) => theme.fontWeight.h2};
        letter-spacing: ${({ theme }) => theme.letterSpacing.h2};
      `,
    })}
  }

  h3 {
    ${getBreakpoints({
      xs: css`
        margin-top: ${({ theme }) => `${theme.spacing.text * 2}rem`};
        margin-bottom: ${({ theme }) => `${theme.spacing.text}rem`};
        text-align: left;
        line-height: ${({ theme }) => theme.lineHeight.text};
        font-size: ${({ theme }) => theme.fontSize.h4};
        font-weight: ${({ theme }) => theme.fontWeight.h2};
        letter-spacing: ${({ theme }) => theme.letterSpacing.text};
      `,
      sm: css`
        margin-top: ${({ theme }) => `${theme.spacing.h4 * 2}rem`};
        margin-bottom: ${({ theme }) => `${theme.spacing.h4}rem`};
        line-height: ${({ theme }) => theme.lineHeight.h4};
        font-size: ${({ theme }) => theme.fontSize.h4};
        font-weight: ${({ theme }) => theme.fontWeight.h3};
        letter-spacing: ${({ theme }) => theme.letterSpacing.h4};
      `,
      md: css`
        margin-top: ${({ theme }) => `${theme.spacing.h3 * 2}rem`};
        margin-bottom: ${({ theme }) => `${theme.spacing.h3}rem`};
        line-height: ${({ theme }) => theme.lineHeight.h3};
        font-size: ${({ theme }) => theme.fontSize.h3};
        letter-spacing: ${({ theme }) => theme.letterSpacing.h3};
      `,
    })}
  }

  h4 {
    ${getBreakpoints({
      xs: css`
        margin-top: ${({ theme }) => `${theme.spacing.text * 2}rem`};
        margin-bottom: ${({ theme }) => `${theme.spacing.text}rem`};
        text-align: left;
        line-height: ${({ theme }) => theme.lineHeight.text};
        font-size: ${({ theme }) => theme.fontSize.text};
        font-weight: ${({ theme }) => theme.fontWeight.h4};
        letter-spacing: ${({ theme }) => theme.letterSpacing.text};
      `,
      md: css`
        margin-top: ${({ theme }) => `${theme.spacing.h4 * 2}rem`};
        margin-bottom: ${({ theme }) => `${theme.spacing.h4}rem`};
        line-height: ${({ theme }) => theme.lineHeight.h4};
        font-size: ${({ theme }) => theme.fontSize.h4};
        letter-spacing: ${({ theme }) => theme.letterSpacing.h4};
      `,
    })}
  }

  ul, ol {
    margin-left: 2rem;
  }

  li {
    margin-bottom: ${({ theme }) => `${theme.spacing.small}rem`};
  }

  p:not(:last-child),
  ul:not(:last-child),
  ol:not(:last-child) {
    margin-bottom: ${({ theme }) => `${theme.spacing.text}rem`};
  }

  table {
    width: 100%;

    caption { /* visually hidden */
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      white-space: nowrap;
      clip: rect(1px, 1px, 1px, 1px);
    }

    td, th {
      padding: 0.5rem;
      text-align: center;
      line-height: ${({ theme }) => theme.lineHeight.h4};
    }

    thead tr {
      font-weight: ${({ theme }) => theme.fontWeight.button};
      color: ${({ theme }) => theme.color.neutral_50};
      background-color: ${({ theme }) => theme.color.neutral_700};

      &:hover {
        color: ${({ theme }) => theme.color.neutral_100};
        background-color: ${({ theme }) => theme.color.red_500};
      }
    }

    tbody tr {
      &:nth-child(even) {
        background-color: ${({ theme }) => theme.color.neutral_200};
      }

      &:hover {
        color: ${({ theme }) => theme.color.neutral_50};
        background-color: ${({ theme }) => theme.color.red_300};
      }
    }

    tfoot tr {
      background-color: ${({ theme }) => theme.color.neutral_400};

      &:hover {
        color: ${({ theme }) => theme.color.neutral_50};
        background-color: ${({ theme }) => theme.color.red_400};
      }
    }
  }

  blockquote {
    border-left: 10px solid ${({ theme }) => theme.color.red_100};
    padding: 1rem 1rem 1rem 1.5rem;
    
    p {
      font-style: italic;

      &::before { content: '“ ';}
      &::after { content: ' ”';}
    }

    footer {
      &::before {
        content: '—';
        margin-right: 1rem;
      }
    }
  }

  hr {
    width: 60%;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.color.neutral_400};
  }
  
  a {
    color: currentColor;

    &:focus {
      outline: none;
    }
  }

  button {
    border: none;
    outline: none;
    font-weight: ${({ theme }) => theme.fontWeight.h1};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-family: ${({ theme }) => theme.fontFamily.display};
    background-color: transparent;
  }

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    margin-top: ${({ theme }) => `${theme.spacing.small}rem`};
    margin-bottom: ${({ theme }) => `${theme.spacing.small}rem`};
    border: none;
    font-family: ${({ theme }) => theme.fontFamily.display};
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.color.neutral_800};
    background-color: ${({ theme }) => theme.color.neutral_50};

    &:focus {
      outline: none;
    }
  }
  
  strong {
    font-weight: ${({ theme }) => theme.fontWeight.h1};
  }
  
  img, video {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }

  pre[class*="language-"] {
    padding: 2rem;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: none;
  }

  code:not([class*="language-"]) {
    ${getBreakpoints({
      xs: css`
        display: inline-block;
        padding: 0 0.4rem;
        border-radius: ${({ theme }) => theme.borderRadius};
        font-size: ${({ theme }) => theme.fontSize.small};
        background-color: ${({ theme }) => theme.color.neutral_200};
      `,
      md: css`
        padding: 0.1rem 0.3rem;
        line-height: 1;
      `,
    })}
  }
  
  figure:not(:first-child),
  table:not(:first-child),
  iframe:not(:first-child),
  blockquote:not(:first-child),
  hr:not(:first-child),
  pre[class*="language-"]:not(:first-child),
  [class*="TextBox"]:not(:first-child),
  .twitter-tweet:not(:first-child),
  video {
    margin-top: ${({ theme }) => `${theme.spacing.h1}rem`} !important;
    /* O !important serve para sobrescrever o CSS inline do Twitter */
  }

  figure:not(:last-child),
  table:not(:last-child),
  iframe:not(:last-child),
  blockquote:not(:last-child),
  hr:not(:last-child),
  pre[class*="language-"]:not(:last-child),
  [class*="TextBox"]:not(:last-child),
  .twitter-tweet:not(:last-child),
  video {
    margin-bottom: ${({ theme }) => `${theme.spacing.h1}rem`} !important;
    /**
     * O !important serve para sobrescrever o CSS inline do Twitter
     */
  }

  iframe {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }

  .twitter-tweet {
    margin: 0 auto;
  }
`;
