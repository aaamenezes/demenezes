import Section from '@/components/designSysyem/Section';
import Text from '@/components/ui/base/Text';
import BlockQuote from '.';

export default function BlockQuoteStory() {
  return (
    <>
      <Section heading="Só citação">
        <BlockQuote>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies
          </Text>
        </BlockQuote>
      </Section>
      <Section heading="Com autor">
        <BlockQuote author="André Menezes">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies
          </Text>
        </BlockQuote>
      </Section>
    </>
  );
}
