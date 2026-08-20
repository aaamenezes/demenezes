import Section from '@/components/designSysyem/Section';
import Text from '.';

export default function TextStory() {
  return (
    <>
      <Section heading="Padrões e props parciais">
        <Text>Texto renderizado como parágrafo.</Text>
        <Text lineHeight="md">Texto com line-height customizado.</Text>
      </Section>
      <Section heading="Texto inline">
        <Text>
          Texto com <Text as="span">um trecho inline</Text> no mesmo parágrafo.
        </Text>
      </Section>
      <Section heading="Ênfase">
        <Text>
          Texto com <Text as="strong">ênfase semântica</Text>.
        </Text>
      </Section>
      <Section heading="Todas as props tipográficas">
        <Text
          family="heading"
          size="lg"
          weight={700}
          letterSpacing="sm"
          lineHeight="sm"
        >
          Texto com todas as props tipográficas.
        </Text>
      </Section>
      <Section heading="Herdar tipografia">
        <Text
          family="heading"
          size="lg"
          weight={700}
          letterSpacing="sm"
          lineHeight="sm"
        >
          Texto pai com <Text as="span" inheritTypographyStyles>tipografia herdada</Text>.
        </Text>
      </Section>
    </>
  );
}
