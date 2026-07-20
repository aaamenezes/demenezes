import Section from '@/components/designSysyem/Section';
import Code from '@/components/ui/base/Code';
import { cssExample, htmlExample, jsExample } from './examples';

export default function CodeStory() {
  return (
    <>
      <Section heading="HTML">
        <Code language="html">{htmlExample}</Code>
      </Section>
      <Section heading="CSS">
        <Code language="css">{cssExample}</Code>
      </Section>
      <Section heading="JavaScript">
        <Code language="javascript">{jsExample}</Code>
      </Section>
    </>
  );
}
