import ContactForm from '../src/components/AboutPage/ContactForm';
import pageWrapper from '../src/components/pageWrapper';
import { getContent } from '../src/external/datoCMS';
import { ContactPageProps } from '../src/types';

function Contact({ contactContent }: { contactContent: ContactPageProps }) {
  return <ContactForm contactContent={contactContent} />;
}

export default pageWrapper(Contact);

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
