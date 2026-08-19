import Section from '@/components/designSysyem/Section';
import Heading from '.';

export default function HeadingStory() {
  return (
    <>
      <Section heading="Níveis">
        <Heading level={1}>Heading nível 1</Heading>
        <Heading level={2}>Heading nível 2</Heading>
        <Heading level={3}>Heading nível 3</Heading>
        <Heading level={4}>Heading nível 4</Heading>
        <Heading level={5}>Heading nível 5</Heading>
        <Heading level={6}>Heading nível 6</Heading>
      </Section>
      <Section heading="Tipografia customizada">
        <Heading size="xxxl" letterSpacing="sm">
          Heading com tipografia customizada
        </Heading>
      </Section>
    </>
  );
}
