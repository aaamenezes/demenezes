import BlockQuote from '.';
import Section from '@/components/designSysyem/Section';

export default function BlockQuoteStory() {
  return (
    <>
      <Section heading="Só citação" direction="row">
        <BlockQuote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies
          </p>
        </BlockQuote>
      </Section>
      <Section heading="Com autor" direction="row">
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
