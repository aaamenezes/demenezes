import React from 'react';
import styled from 'styled-components';
import Container from '../Common/Container';
import settings from '../../../settings.json';
import { ContactPageProps } from '../../types';

const StyledContactForm = styled.div`
  &:first-of-type {
    padding-top: 6.6rem;
  }
`;

const ContactTitle = styled.h2`
  margin-top: ${({ theme }) => `${theme.spacing.h2}rem`};
`;

const MailchimpContactForm = styled.iframe`
  width: 100%;
  min-height: 1000px;
`;

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
    <Container as={StyledContactForm} width="md">
      <ContactTitle>{contactTitle}</ContactTitle>
      {textElements}
      <MailchimpContactForm
        title="Formulário de contato"
        src={mailchimpIframeSrc}
        frameBorder="0"
      />
    </Container>
  );
}
