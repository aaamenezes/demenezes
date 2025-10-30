import Head from '@/components/meta/Head';
import ContactForm from '@/components/ui/section/AboutContactForm';
import PageFooter from '@/components/ui/section/PageFooter';
import PageHeader from '@/components/ui/section/PageHeader';
import { getContent } from '@/external/datoCMS';
import type { ContactPageProps } from '@/types';

export default function Contact({
  contactContent,
}: {
  contactContent: ContactPageProps;
}) {
  return (
    <>
      <Head componentProps={{ contactContent }} />
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
