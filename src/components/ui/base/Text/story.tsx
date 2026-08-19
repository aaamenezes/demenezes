import Section from '@/components/designSysyem/Section';
import Text from '.';

export default function TextStory() {
  return (
    <>
      <Section heading="Parágrafo">
        <Text>Texto renderizado como parágrafo.</Text>
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
    </>
  );
}
