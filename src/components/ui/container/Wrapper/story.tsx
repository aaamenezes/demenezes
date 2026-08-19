import Section from '@/components/designSysyem/Section';
import Text from '@/components/ui/base/Text';
import Wrapper from '.';

export default function WrapperStory() {
  return (
    <>
      <Section heading="Small width">
        <Wrapper width="sm">
          <Text>
            Wrapper com largura sm. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum mollitia, at magni sequi similique iusto
            quis non eos amet quisquam pariatur! Voluptas blanditiis rem, quod
            non impedit libero assumenda cumque?
          </Text>
        </Wrapper>
      </Section>

      <Section heading="Medium width">
        <Wrapper width="md">
          <Text>
            Wrapper com largura md. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum mollitia, at magni sequi similique iusto
            quis non eos amet quisquam pariatur! Voluptas blanditiis rem, quod
            non impedit libero assumenda cumque?
          </Text>
        </Wrapper>
      </Section>

      <Section heading="Large width">
        <Wrapper width="lg">
          <Text>
            Wrapper com largura lg. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum mollitia, at magni sequi similique iusto
            quis non eos amet quisquam pariatur! Voluptas blanditiis rem, quod
            non impedit libero assumenda cumque?
          </Text>
        </Wrapper>
      </Section>

      <Section heading="Extra large width">
        <Wrapper width="xl">
          <Text>
            Wrapper com largura xl. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum mollitia, at magni sequi similique iusto
            quis non eos amet quisquam pariatur! Voluptas blanditiis rem, quod
            non impedit libero assumenda cumque?
          </Text>
        </Wrapper>
      </Section>

      <Section heading="Double extra large width">
        <Wrapper width="xxl">
          <Text>
            Wrapper com largura xxl. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum mollitia, at magni sequi similique iusto
            quis non eos amet quisquam pariatur! Voluptas blanditiis rem, quod
            non impedit libero assumenda cumque?
          </Text>
        </Wrapper>
      </Section>

      <Section heading="Triple extra large width">
        <Wrapper width="xxxl">
          <Text>
            Wrapper com largura xxxl. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum mollitia, at magni sequi similique iusto
            quis non eos amet quisquam pariatur! Voluptas blanditiis rem, quod
            non impedit libero assumenda cumque?
          </Text>
        </Wrapper>
      </Section>

      <Section heading="Full width">
        <Wrapper width="full">
          <Text>
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
          </Text>
        </Wrapper>
      </Section>

      <Section heading="Character width">
        <Wrapper width="75ch">
          <Text>
            Wrapper com largura máxima de 75 caracteres. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Laborum mollitia, at magni sequi
            similique iusto quis non eos amet quisquam pariatur!
          </Text>
        </Wrapper>
      </Section>
    </>
  );
}
