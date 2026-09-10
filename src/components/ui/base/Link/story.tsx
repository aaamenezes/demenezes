import Section from '@/components/styleGuide/Section';
import Figure from '@/components/ui/base/Figure';
import Link from '.';

export default function LinkStory() {
  return (
    <>
      <Section heading="Link interno">
        <Link href="#">Link interno</Link>
      </Section>
      <Section heading="Link externo">
        <Link href="#" isExternal>
          Link externo
        </Link>
      </Section>
      <Section heading="Imagem link interno">
        <Link href="#">
          <Figure>
            <Figure.Image
              src="/favicon/ms-icon-310x310.png"
              width={150}
              height={150}
              alt="Description of the image"
            />
          </Figure>
        </Link>
      </Section>
      <Section heading="Imagem link externo">
        <Link href="#" isExternal>
          <Figure>
            <Figure.Image
              src="/favicon/ms-icon-310x310.png"
              width={150}
              height={150}
              alt="Description of the image"
            />
          </Figure>
        </Link>
      </Section>
    </>
  );
}
