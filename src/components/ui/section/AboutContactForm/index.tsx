import Heading from '@/components/ui/base/Heading';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import settings from '@/data/settings.json';
import type { ContactPageProps } from '@/types';
import style from './styles.module.css';

export default function ContactForm({
  contactContent,
}: {
  contactContent: ContactPageProps;
}) {
  const { mailchimpIframeSrc } = settings.form.contact;
  const { contactTitle, contactText } = contactContent.data.contactSection;
  const textElements = contactText.split('\n').map(text => (
    <Text key={text} lineHeight="md">
      {text}
    </Text>
  ));

  return (
    <Wrapper className={style.contactForm} width="md">
      <Heading className={style.contactTitle}>{contactTitle}</Heading>
      {textElements}
      <iframe
        className={style.mailchimpContactForm}
        title="Formulário de contato"
        src={mailchimpIframeSrc}
        frameBorder="0"
      />
    </Wrapper>
  );
}
