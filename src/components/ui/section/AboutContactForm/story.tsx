import Section from '@/components/designSysyem/Section';
import ContactForm from '.';

export default function AboutContactFormStory() {
  return (
    <Section heading="Default">
      <ContactForm
        contactContent={{
          data: {
            contactSection: {
              contactTitle: 'Entre em contato',
              contactText:
                'Quer conversar sobre um projeto, palestra ou parceria?\nPreencha o formulário abaixo e retorno assim que possível.',
            },
            profileImage: {
              profileImage: {
                alt: 'André Menezes',
                responsiveImage: {
                  srcSet: '/profile.jpg',
                },
              },
            },
          },
        }}
      />
    </Section>
  );
}
