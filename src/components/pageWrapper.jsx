import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import { GlobalStyle } from '../theme/globalStyle'
import Head from './Common/Head'
import PageFooter from './Common/PageFooter'
import PageHeader from './Common/PageHeader'

export default function pageWrapper(PageComponent) {
  return componentProps => (
    <ThemeProvider theme={theme}>
      <Head componentProps={componentProps} />
      <GlobalStyle />
      <PageHeader />
      <PageComponent {...componentProps} />
      <PageFooter />
    </ThemeProvider>
  )
}
