/* eslint-disable @typescript-eslint/no-explicit-any */

import { ThemeProvider } from 'styled-components';
import Categories from '../src/components/AboutPage/Categories';
import ContactForm from '../src/components/AboutPage/ContactForm';
import Greeting from '../src/components/AboutPage/Greeting';
import Hobbies from '../src/components/AboutPage/Hobbies';
import Story from '../src/components/AboutPage/Story';
import Container from '../src/components/Common/Container';
import PageFooter from '../src/components/Common/PageFooter';
import PageHeader from '../src/components/Common/PageHeader';
import SocialMedia from '../src/components/Common/SocialMedia';
import { getContent } from '../src/external/datoCMS';
import { theme } from '../src/theme';
import { GlobalStyle } from '../src/theme/globalStyle';

export default function About({
  aboutPageContent,
  contactContent,
}: {
  aboutPageContent: any;
  contactContent: any;
}) {
  const {
    greetingTitle,
    greetingSubtitle,
    greetingDescription,
    categoriesTitle,
    categoryItemModule,
    historyTitle,
    historyText,
    hobbiesTitle,
    hobbiesText,
  } = aboutPageContent.data.aboutPage;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageHeader />
      <main>
        <Greeting
          greetingTitle={greetingTitle}
          greetingSubtitle={greetingSubtitle}
          greetingDescription={greetingDescription}
          profileImage={aboutPageContent.data.profileImage.profileImage}
        />
        <Categories
          categoriesTitle={categoriesTitle}
          categoryItems={categoryItemModule}
        />
        <Story historyTitle={historyTitle} historyText={historyText} />
        <Hobbies hobbiesTitle={hobbiesTitle} hobbiesText={hobbiesText} />
        <Container as="section" width="sm">
          <SocialMedia center />
        </Container>
        <ContactForm contactContent={contactContent} />
        <Container as="section" width="md">
          <p>Muito prazer!</p>
        </Container>
      </main>
      <PageFooter />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const aboutPageContent = await getContent('aboutPage', {});
  const contactContent = await getContent('contactSection', {});

  return {
    props: { aboutPageContent, contactContent },
  };
}
