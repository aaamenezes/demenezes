import Section from '@/components/designSysyem/Section';
import BlockCode from '@/components/ui/base/BlockCode';
import { cssExample, htmlExample, jsExample } from './examples';

export default function CodeStory() {
  return (
    <>
      <Section heading="HTML">
        <BlockCode language="html">{htmlExample}</BlockCode>
      </Section>
      <Section heading="CSS">
        <BlockCode language="css">{cssExample}</BlockCode>
      </Section>
      <Section heading="JavaScript">
        <BlockCode language="javascript">{jsExample}</BlockCode>
      </Section>
    </>
  );
}
