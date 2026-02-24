import Page from '@/components/designSysyem/Page';
import Section from '@/components/designSysyem/Section';
import Code from '@/components/ui/base/Code';
import settings from '@/data/settings.json';
import Head from 'next/head';
import { cssExample, htmlExample, jsExample } from './examples';

export default function DesignSystem() {
  const { src } = settings;

  return (
    <Page>
      <Head>
        <link rel="stylesheet" href={src.font} />
        <link rel="stylesheet" href="/style/prism/vs-code.css" />
        {/* <link rel="stylesheet" href="/style/prism/dracula.css" /> */}
      </Head>
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
