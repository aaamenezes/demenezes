import { ThemeProvider } from 'styled-components';
import ContactForm from '../src/components/AboutPage/ContactForm';
import PageFooter from '../src/components/Common/PageFooter';
import PageHeader from '../src/components/Common/PageHeader';
import { getContent } from '../src/external/datoCMS';
import { theme } from '../src/theme';
import { GlobalStyle } from '../src/theme/globalStyle';
import { ContactPageProps } from '../src/types';

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
    revalidate: 3600,
    /**
     * In secods:
     * 60sec * 60 = 1hour = 3600sec
     */
  };
}
