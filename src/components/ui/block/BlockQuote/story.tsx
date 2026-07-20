import BlockQuote from '.';
import Section from '@/components/designSysyem/Section';

export default function BlockQuoteStory() {
  return (
    <>
      <Section heading="Só citação">
        <BlockQuote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies
          </p>
        </BlockQuote>
      </Section>
      <Section heading="Com autor">
        <BlockQuote author="André Menezes">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies
          </p>
        </BlockQuote>
      </Section>
    </>
  );
}
