import Section from '@/components/styleGuide/Section';
import Logo from '.';

export default function LogoStory() {
  return (
    <>
      <Section heading="Default">
        <Logo />
      </Section>
      <Section
        heading="Color Inverse"
        backgroundColor="var(--color-neutral-900)"
      >
        <Logo isColorInverse />
      </Section>
    </>
  );
}
