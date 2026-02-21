import settings from '@/data/settings.json';
import Button from '@/components/ui/base/Button';
import Head from 'next/head';
import { Menu } from 'lucide-react';
import Page from '@/components/designSysyem/Page';
import Section from '@/components/designSysyem/Section';

export default function Test() {
  const { src } = settings;

  return (
    <Page>
      <Head>
        <link rel="stylesheet" href={src.font} />
      </Head>
      <Section heading="Filled">
        <Button variant="filled" type="button">
          Button
        </Button>
        <Button variant="filled" type="submit">
          Submit
        </Button>
        <Button variant="filled" type="reset">
          Reset
        </Button>
        <Button variant="filled" disabled>
          Disabled
        </Button>
      </Section>
      <Section heading="Outlined">
        <Button variant="outlined" type="button">
          Button
        </Button>
        <Button variant="outlined" type="submit">
          Submit
        </Button>
        <Button variant="outlined" type="reset">
          Reset
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
      </Section>
      <Section heading="Ghost">
        <Button variant="ghost" type="button">
          Button
        </Button>
        <Button variant="ghost" type="submit">
          Submit
        </Button>
        <Button variant="ghost" type="reset">
          Reset
        </Button>
        <Button variant="ghost" disabled>
          Disabled
        </Button>
      </Section>
      <Section heading="Link">
        <Button variant="link" type="button">
          Button
        </Button>
        <Button variant="link" type="submit">
          Submit
        </Button>
        <Button variant="link" type="reset">
          Reset
        </Button>
        <Button variant="link" disabled>
          Disabled
        </Button>
      </Section>
      <Section heading="Icon">
        <Button>
          <Menu size={16} />
        </Button>
        <Button disabled>
          <Menu size={16} />
        </Button>
      </Section>
    </Page>
  );
}
