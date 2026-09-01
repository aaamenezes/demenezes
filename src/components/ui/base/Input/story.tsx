import Section from '@/components/designSysyem/Section';
import { useState } from 'react';
import Input from '.';

export default function InputStory() {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');
  const [valueC, setValueC] = useState('');

  return (
    <>
      <Section heading="Input">
        <Input
          label="Exemplo"
          name="example"
          placeholder="Placeholder"
          id="example"
          value={valueA}
          onChange={event => setValueA(event.target.value)}
        />
      </Section>
      <Section heading="Input disabled">
        <Input
          label="Exemplo desabilitado"
          name="disabled-example"
          placeholder="Placeholder"
          id="disabled-example"
          value={valueB}
          onChange={event => setValueB(event.target.value)}
          disabled
        />
      </Section>
      <Section heading="Input with hidden label">
        <Input
          label="Exemplo com label oculta"
          name="hidden-label-example"
          placeholder="Placeholder"
          id="hidden-label-example"
          value={valueC}
          onChange={event => setValueC(event.target.value)}
          hideLabel
        />
      </Section>
    </>
  );
}
