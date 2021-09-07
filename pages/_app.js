import React from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { theme } from '../src/theme'
import { GlobalStyle } from '../src/theme/globalStyle'
import { BlogContext, blogContextValues } from '../src/BlogContext'

export default function MyApp({ Component, pageProps }) {
  return (
    <BlogContext.Provider value={blogContextValues()}>
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
    </BlogContext.Provider>
  )
}
