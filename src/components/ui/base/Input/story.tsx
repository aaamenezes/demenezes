import Section from '@/components/designSysyem/Section';
import Input from '.';

export default function InputStory() {
  return (
    <>
      <Section heading="Input" direction="column">
        <Input name="example" placeholder="Placeholder" />
      </Section>
      <Section heading="Input disabled" direction="column">
        <Input name="example" placeholder="Placeholder" disabled />
      </Section>
    </>
  );
}
