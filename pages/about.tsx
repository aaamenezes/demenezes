import Head from '@/components/meta/Head';
import Text from '@/components/ui/base/Text';
import SocialMedia from '@/components/ui/container/SocialMedia';
import Wrapper from '@/components/ui/container/Wrapper';
import AboutCategories from '@/components/ui/section/AboutCategories';
import ContactForm from '@/components/ui/section/AboutContactForm';
import Greeting from '@/components/ui/section/AboutGreeting';
import AboutHobbies from '@/components/ui/section/AboutHobbies';
import AboutStory from '@/components/ui/section/AboutStory';
import { getContent } from '@/external/datoCMS';
import { getBlogLayout } from '@/layouts/getLayouts';
import type { AboutPageProps, ContactPageProps } from '@/types';

export default function About({
  aboutPageContent,
  contactContent,
}: {
  aboutPageContent: AboutPageProps;
  contactContent: ContactPageProps;
}) {
  const {
    greetingHeading,
    greetingSubheading,
    greetingDescription,
    categoriesHeading,
    categoryItemModule,
    historyHeading,
    historyText,
    hobbiesHeading,
    hobbiesText,
  } = aboutPageContent.data.aboutPage;

  return (
    <>
      <Head
        componentProps={{
          aboutPageContent,
        }}
      />
      <main>
        <Greeting
          greetingHeading={greetingHeading}
          greetingSubheading={greetingSubheading}
          greetingDescription={greetingDescription}
          profileImage={aboutPageContent.data.profileImage.profileImage}
        />
        <AboutCategories
          categoriesHeading={categoriesHeading}
          categoryItems={categoryItemModule}
        />
        <AboutStory historyHeading={historyHeading} historyText={historyText} />
        <AboutHobbies
          hobbiesHeading={hobbiesHeading}
          hobbiesDescription={hobbiesText}
        />
        <Wrapper as="section" width="sm">
          <SocialMedia />
        </Wrapper>
        <ContactForm contactContent={contactContent} />
        <Wrapper as="section" width="md">
          <Text>Muito prazer!</Text>
        </Wrapper>
      </main>
    </>
  );
}

About.getLayout = getBlogLayout;

export async function getStaticProps() {
  const aboutPageContent = await getContent('aboutPage', {});
  const contactContent = await getContent('contactSection', {});

  return {
    props: { aboutPageContent, contactContent },
  };
}
