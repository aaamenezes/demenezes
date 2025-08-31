/* eslint-disable @typescript-eslint/no-explicit-any */

import Head from '../src/components/meta/Head';
import SocialMedia from '../src/components/ui/container/SocialMedia';
import Wrapper from '../src/components/ui/container/Wrapper';
import AboutCategories from '../src/components/ui/section/AboutCategories';
import ContactForm from '../src/components/ui/section/AboutContactForm';
import Greeting from '../src/components/ui/section/AboutGreeting';
import Hobbies from '../src/components/ui/section/AboutHobbies';
import Story from '../src/components/ui/section/AboutStory';
import PageFooter from '../src/components/ui/section/PageFooter';
import PageHeader from '../src/components/ui/section/PageHeader';
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
    <>
      <Head
        componentProps={{
          aboutPageContent,
        }}
      />
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
    </>
  );
}

export async function getStaticProps() {
  const aboutPageContent = await getContent('aboutPage', {});
  const contactContent = await getContent('contactSection', {});

  return {
    props: { aboutPageContent, contactContent },
  };
}
