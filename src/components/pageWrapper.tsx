import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import { GlobalStyle } from '../theme/globalStyle'
import Head from './Common/Head'
import PageFooter from './Common/PageFooter'
import PageHeader from './Common/PageHeader'

export default function pageWrapper<PageProps>(PageComponent: (props: PageProps) => ReactNode) {
  return (componentProps: PageProps) => (
    <ThemeProvider theme={theme}>
      <Head componentProps={componentProps} />
      <GlobalStyle />
      <PageHeader />
      <PageComponent {...componentProps} />
      <PageFooter />
    </ThemeProvider>
  )
}
