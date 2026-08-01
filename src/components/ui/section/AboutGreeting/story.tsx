import Section from '@/components/designSysyem/Section';
import Greeting from '.';

export default function AboutGreetingStory() {
  return (
    <Section heading="Default">
      <Greeting
        greetingTitle="Sobre André Menezes"
        greetingSubtitle="Que bom que vc está aqui!"
        greetingDescription="Criei esse blog pra falar sobre programação front-end, fazer parte da comunidade e ajudar qualquer um que precise."
        profileImage={{
          alt: 'André Menezes',
          responsiveImage: {
            src: '/favicon/ms-icon-310x310.png',
          },
          width: 310,
          height: 310,
        }}
      />
    </Section>
  );
}
