import settings from '../../../../../settings.json';
import { ContactPageProps } from '../../../../types';
import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

export default function ContactForm({
  contactContent,
}: {
  contactContent: ContactPageProps;
}) {
  const { mailchimpIframeSrc } = settings.form.contact;
  const { contactTitle, contactText } = contactContent.data.contactSection;
  const textElements = contactText
    .split('\n')
    .map(text => <p key={text}>{text}</p>);

  return (
    <Wrapper className={S.contactForm} width="md">
      <h2 className={S.contactTitle}>{contactTitle}</h2>
      {textElements}
      <iframe
        className={S.mailchimpContactForm}
        title="Formulário de contato"
        src={mailchimpIframeSrc}
        frameBorder="0"
      />
    </Wrapper>
  );
}
