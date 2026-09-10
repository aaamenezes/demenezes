import Section from '@/components/styleGuide/Section';
import BlockQuote from '.';

export default function BlockQuoteStory() {
  return (
    <>
      <Section heading="Só citação">
        <BlockQuote>
          <BlockQuote.Quote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies
          </BlockQuote.Quote>
        </BlockQuote>
      </Section>
      <Section heading="Com autor no início">
        <BlockQuote author="André Menezes">
          <BlockQuote.Author>André Menezes</BlockQuote.Author>
          <BlockQuote.Quote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies
          </BlockQuote.Quote>
        </BlockQuote>
      </Section>
      <Section heading="Com autor no final">
        <BlockQuote>
          <BlockQuote.Quote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies
          </BlockQuote.Quote>
          <BlockQuote.Author>André Menezes</BlockQuote.Author>
        </BlockQuote>
      </Section>
    </>
  );
}
