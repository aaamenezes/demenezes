/* eslint-disable @typescript-eslint/no-explicit-any */

import Head from '@/components/meta/Head';
import SocialMedia from '@/components/ui/container/SocialMedia';
import Wrapper from '@/components/ui/container/Wrapper';
import AboutCategories from '@/components/ui/section/AboutCategories';
import ContactForm from '@/components/ui/section/AboutContactForm';
import Greeting from '@/components/ui/section/AboutGreeting';
import Hobbies from '@/components/ui/section/AboutHobbies';
import StoryTitle from '@/components/ui/section/AboutStory';
import PageFooter from '@/components/ui/section/PageFooter';
import PageHeader from '@/components/ui/section/PageHeader';
import { getContent } from '@/external/datoCMS';

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
        <StoryTitle historyTitle={historyTitle} historyText={historyText} />
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
