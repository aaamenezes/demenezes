import Head from '@/components/meta/Head';
import ContactForm from '@/components/ui/section/AboutContactForm';
import { getContent } from '@/external/datoCMS';
import { getBlogLayout } from '@/layouts/getLayouts';
import type { ContactPageProps } from '@/types';

export default function Contact({
  contactContent,
}: {
  contactContent: ContactPageProps;
}) {
  return (
    <>
      <Head componentProps={{ contactContent }} />
      <ContactForm contactContent={contactContent} />
    </>
  );
}

Contact.getLayout = getBlogLayout;

export async function getStaticProps() {
  const contactContent = await getContent('contactSection', {});

  return {
    props: { contactContent },
  };
}
