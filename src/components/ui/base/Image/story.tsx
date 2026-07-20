import Section from '@/components/designSysyem/Section';
import Image from '.';

export default function ImageStory() {
  return (
    <>
      <Section heading="Imagem">
        <Image
          src="/favicon/ms-icon-310x310.png"
          width={150}
          height={150}
          alt="Description of the image"
        />
      </Section>
    </>
  );
}
