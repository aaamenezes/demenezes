import ContactForm from '../src/components/ui/section/AboutContactForm';
import PageFooter from '../src/components/ui/section/PageFooter';
import PageHeader from '../src/components/ui/section/PageHeader';
import { getContent } from '../src/external/datoCMS';
import { ContactPageProps } from '../src/types';

export default function Contact({
  contactContent,
}: {
  contactContent: ContactPageProps;
}) {
  return (
    <>
      <PageHeader />
      <ContactForm contactContent={contactContent} />
      <PageFooter />
    </>
  );
}

export async function getStaticProps() {
  const contactContent = await getContent('contactSection', {});

  return {
    props: { contactContent },
  };
}
