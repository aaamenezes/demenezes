import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { GlobalStyle } from '../theme/globalStyle';
import Head from './Common/Head';
import PageFooter from './Common/PageFooter';
import PageHeader from './Common/PageHeader';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function pageWrapper(PageComponent: any) {
  // eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
  return (componentProps: any) => (
    <ThemeProvider theme={theme}>
      <Head componentProps={componentProps} />
      <GlobalStyle />
      <PageHeader />
      <PageComponent {...componentProps} />
      <PageFooter />
    </ThemeProvider>
  );
}
