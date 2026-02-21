import settings from '@/data/settings.json';
import Button from '@/components/ui/base/Button';
import Head from 'next/head';
import { Menu } from 'lucide-react';

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '0.5rem',
        padding: '1rem',
        backgroundColor: '#F0F0F0',
      }}
    >
      {children}
    </div>
  );
}

function Section({
  heading,
  children,
  style = {},
}: {
  heading: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <section
      style={{
        width: '80%',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: '#FFFFFF',
        ...style,
      }}
    >
      <h2
        style={{
          textAlign: 'left',
          marginBottom: '1rem',
          color: '#AAAAAA',
        }}
      >
        {heading}
      </h2>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
        }}
      >
        {children}
      </div>
    </section>
  );
}

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
