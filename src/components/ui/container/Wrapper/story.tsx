import Section from '@/components/designSysyem/Section';
import Wrapper from '.';

export default function WrapperStory() {
  return (
    <>
      <Section heading="Default">
        <Wrapper width="md">
          <p>Wrapper com largura limitada padrão.</p>
        </Wrapper>
      </Section>

      <Section heading="Fluid">
        <Wrapper width="md" isFluid>
          <p>Wrapper fluido dentro do breakpoint escolhido.</p>
        </Wrapper>
      </Section>

      <Section heading="Full width">
        <Wrapper width="full">
          <p>Wrapper ocupando 100% da largura disponível.</p>
        </Wrapper>
      </Section>

      <Section heading="Spacing">
        <Wrapper width="lg" spacing={2}>
          <p>Wrapper com margin-bottom configurada via spacing.</p>
        </Wrapper>
      </Section>
    </>
  );
}
