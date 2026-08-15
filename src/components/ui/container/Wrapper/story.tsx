import Section from '@/components/designSysyem/Section';
import Wrapper from '.';

export default function WrapperStory() {
  return (
    <>
      <Section heading="Small width">
        <Wrapper width="sm">
          <p>
            Wrapper com largura sm. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum mollitia, at magni sequi similique iusto
            quis non eos amet quisquam pariatur! Voluptas blanditiis rem, quod
            non impedit libero assumenda cumque?
          </p>
        </Wrapper>
      </Section>

      <Section heading="Medium width">
        <Wrapper width="md">
          <p>
            Wrapper com largura md. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum mollitia, at magni sequi similique iusto
            quis non eos amet quisquam pariatur! Voluptas blanditiis rem, quod
            non impedit libero assumenda cumque?
          </p>
        </Wrapper>
      </Section>

      <Section heading="Large width">
        <Wrapper width="lg">
          <p>
            Wrapper com largura lg. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum mollitia, at magni sequi similique iusto
            quis non eos amet quisquam pariatur! Voluptas blanditiis rem, quod
            non impedit libero assumenda cumque?
          </p>
        </Wrapper>
      </Section>

      <Section heading="Extra large width">
        <Wrapper width="xl">
          <p>
            Wrapper com largura xl. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum mollitia, at magni sequi similique iusto
            quis non eos amet quisquam pariatur! Voluptas blanditiis rem, quod
            non impedit libero assumenda cumque?
          </p>
        </Wrapper>
      </Section>

      <Section heading="Double extra large width">
        <Wrapper width="xxl">
          <p>
            Wrapper com largura xxl. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum mollitia, at magni sequi similique iusto
            quis non eos amet quisquam pariatur! Voluptas blanditiis rem, quod
            non impedit libero assumenda cumque?
          </p>
        </Wrapper>
      </Section>

      <Section heading="Triple extra large width">
        <Wrapper width="xxxl">
          <p>
            Wrapper com largura xxxl. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum mollitia, at magni sequi similique iusto
            quis non eos amet quisquam pariatur! Voluptas blanditiis rem, quod
            non impedit libero assumenda cumque?
          </p>
        </Wrapper>
      </Section>

      <Section heading="Full width">
        <Wrapper width="full">
          <p>
            Wrapper ocupando 100% da largura disponível. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Laborum mollitia, at magni sequi
            similique iusto quis non eos amet quisquam pariatur! Voluptas
            blanditiis rem, quod non impedit libero assumenda cumque? Laborum
            mollitia, at magni sequi similique iusto quis non eos amet quisquam
            pariatur! Voluptas blanditiis rem, quod non impedit libero assumenda
            cumque? Laborum mollitia, at magni sequi similique iusto quis non
            eos amet quisquam pariatur! Voluptas blanditiis rem, quod non
            impedit libero assumenda cumque? Laborum mollitia, at magni sequi
            similique iusto quis non eos amet quisquam pariatur! Voluptas
            blanditiis rem, quod non impedit libero assumenda cumque?
          </p>
        </Wrapper>
      </Section>

      <Section heading="Character width">
        <Wrapper width="75ch">
          <p>
            Wrapper com largura máxima de 75 caracteres. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Laborum mollitia, at magni sequi
            similique iusto quis non eos amet quisquam pariatur!
          </p>
        </Wrapper>
      </Section>
    </>
  );
}
