import React from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { theme } from '../src/theme'
import { GlobalStyle } from '../src/theme/globalStyle'

export default function MyApp({ Component, pageProps }) {
  /* <BlogContext.Provider value={blogContextValues()}>
    <Element />
  </BlogContext.Provider> */

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.2/css/all.css'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>

  )
}
