/* eslint-disable @typescript-eslint/no-explicit-any */

import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';
import { GlobalStyle } from '../src/theme/globalStyle';
import PageHeader from '../src/components/ui/section/PageHeader';
import Greeting from '../src/components/ui/section/AboutGreeting';
import AboutCategories from '../src/components/ui/section/AboutCategories';
import Story from '../src/components/ui/section/AboutStory';
import Hobbies from '../src/components/ui/section/AboutHobbies';
import Wrapper from '../src/components/ui/container/Wrapper';
import SocialMedia from '../src/components/ui/container/SocialMedia';
import ContactForm from '../src/components/ui/section/AboutContactForm';
import PageFooter from '../src/components/ui/section/PageFooter';
import { getContent } from '../src/external/datoCMS';

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
        <AboutCategories
          categoriesTitle={categoriesTitle}
          categoryItems={categoryItemModule}
        />
        <Story historyTitle={historyTitle} historyText={historyText} />
        <Hobbies hobbiesTitle={hobbiesTitle} hobbiesText={hobbiesText} />
        <Wrapper as="section" width="sm">
          <SocialMedia isCenter />
        </Wrapper>
        <ContactForm contactContent={contactContent} />
        <Wrapper as="section" width="md">
          <p>Muito prazer!</p>
        </Wrapper>
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
