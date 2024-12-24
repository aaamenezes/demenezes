/* eslint-disable max-len */
import Categories from '../src/components/AboutPage/Categories';
import ContactForm from '../src/components/AboutPage/ContactForm';
import Greeting from '../src/components/AboutPage/Greeting';
import Hobbies from '../src/components/AboutPage/Hobbies';
import Story from '../src/components/AboutPage/Story';
import Container from '../src/components/Common/Container';
import SocialMedia from '../src/components/Common/SocialMedia';
import pageWrapper from '../src/components/pageWrapper';
import { getContent } from '../src/external/datoCMS';

function About({
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
  );
}

export default pageWrapper(About);

export async function getStaticProps() {
  const aboutPageContent = await getContent('aboutPage', {});
  const contactContent = await getContent('contactSection', {});

  return {
    props: { aboutPageContent, contactContent },
    revalidate: 3600,
    /**
     * In secods:
     * 60sec * 60 = 1hour = 3600sec
     */
  };
}
