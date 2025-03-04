import { ThemeProvider } from 'styled-components';
import ContactForm from '../src/components/ui/section/AboutContactForm';
import { getContent } from '../src/external/datoCMS';
import { theme } from '../src/theme';
import { GlobalStyle } from '../src/theme/globalStyle';
import { ContactPageProps } from '../src/types';
import PageHeader from '../src/components/ui/section/PageHeader';
import PageFooter from '../src/components/ui/section/PageFooter';

export default function Contact({
  contactContent,
}: {
  contactContent: ContactPageProps;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageHeader />
      <ContactForm contactContent={contactContent} />
      <PageFooter />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const contactContent = await getContent('contactSection', {});

  return {
    props: { contactContent },
  };
}
