import Page from '@/components/designSysyem/Page';
import Section from '@/components/designSysyem/Section';
import Code from '@/components/ui/base/Code';
import { cssExample, htmlExample, jsExample } from './examples';

export default function CodeStory() {
  return (
    <Page>
      <Section heading="HTML" direction="column">
        <Code language="html">{htmlExample}</Code>
      </Section>
      <Section heading="CSS" direction="column">
        <Code language="css">{cssExample}</Code>
      </Section>
      <Section heading="JavaScript" direction="column">
        <Code language="javascript">{jsExample}</Code>
      </Section>
    </Page>
  );
}
