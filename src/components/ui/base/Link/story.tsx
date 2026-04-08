import Section from '@/components/designSysyem/Section';
import Image from '@/components/ui/base/Image';
import Link from '.';

export default function LinkStory() {
  return (
    <>
      <Section heading="Link interno" direction="column">
        <Link href="#">Link interno</Link>
      </Section>
      <Section heading="Link externo" direction="column">
        <Link href="#" isExternal>
          Link externo
        </Link>
      </Section>
      <Section heading="Imagem link interno" direction="column">
        <Link href="#">
          <Image
            src="/favicon/ms-icon-310x310.png"
            width={150}
            height={150}
            alt="Description of the image"
          />
        </Link>
      </Section>
      <Section heading="Imagem link externo" direction="column">
        <Link href="#" isExternal>
          <Image
            src="/favicon/ms-icon-310x310.png"
            width={150}
            height={150}
            alt="Description of the image"
          />
        </Link>
      </Section>
    </>
  );
}
