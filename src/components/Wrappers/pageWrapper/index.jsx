import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../theme'
import { GlobalStyle } from '../../../theme/globalStyle'
import Head from '../../Common/Head'
import PageHeader from '../../Common/PageHeader'
import Footer from '../../Footer'

export default function pageWrapper(PageComponent) {
  return componentProps => (
    <ThemeProvider theme={theme}>
      <Head componentProps={componentProps} />
      <GlobalStyle />
      <PageHeader />
      <PageComponent {...componentProps} />
      <Footer />
    </ThemeProvider>
  )
}
