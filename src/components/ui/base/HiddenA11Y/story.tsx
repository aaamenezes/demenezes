import Section from '@/components/designSysyem/Section';
import HiddenA11Y from '.';

export default function HiddenA11YStory() {
  return (
    <>
      <Section heading="Visualmente escondido, mas acessível (usar DevTools para testar)">
        <HiddenA11Y>
          Texto a ser escondido visualmente, mas acessível para leitores de
          tela.
        </HiddenA11Y>
      </Section>
    </>
  );
}
