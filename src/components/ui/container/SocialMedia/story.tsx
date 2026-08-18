import Section from '@/components/designSysyem/Section';
import SocialMedia from '.';

export default function SocialMediaStory() {
  return (
    <>
      <Section heading="Padrão">
        <SocialMedia />
      </Section>
      <Section
        heading="Cor inversa"
        backgroundColor="var(--color-neutral-900)"
      >
        <SocialMedia inverseColor />
      </Section>
    </>
  );
}
