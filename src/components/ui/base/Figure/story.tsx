import Section from '@/components/styleGuide/Section';

import Figure from '.';

export default function FigureStory() {
  return (
    <>
      <Section heading="Imagem com legenda">
        <Figure>
          <Figure.Image
            src="/images/image.jpg"
            width={640}
            height={480}
            alt="Description of the image"
          />
          <Figure.Figcaption>Descrição da imagem</Figure.Figcaption>
        </Figure>
      </Section>
      <Section heading="Imagem sem legenda">
        <Figure>
          <Figure.Image
            src="/images/image.jpg"
            width={640}
            height={480}
            alt="Description of the image"
          />
        </Figure>
      </Section>
    </>
  );
}
