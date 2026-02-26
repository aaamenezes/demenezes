import Content from '@/components/designSysyem/Content';
import Page from '@/components/designSysyem/Page';
import Section from '@/components/designSysyem/Section';
import Sidebar from '@/components/designSysyem/Sidebar';
import Button from '../../base/Button';
import { Menu } from 'lucide-react';
import Code from '../../base/Code';

const htmlExample = `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`;

const cssExample = `body {
  font-family: 'Inter', sans-serif;
  background-color: #f0f0f0;
  color: #333;
}

h1 {
  color: #0070f3;
}`;

const jsExample = `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`;

export default function DesignSystemScreen() {
  return (
    <Page>
      <Sidebar />
      <Content>
        <Section heading="Filled" direction="row">
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
        <Section heading="Outlined" direction="row">
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
        <Section heading="Ghost" direction="row">
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
        <Section heading="Link" direction="row">
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
        <Section heading="Icon" direction="row">
          <Button>
            <Menu size={16} />
          </Button>
          <Button disabled>
            <Menu size={16} />
          </Button>
        </Section>
        <Section heading="HTML" direction="column">
          <Code language="html">{htmlExample}</Code>
        </Section>
        <Section heading="CSS" direction="column">
          <Code language="css">{cssExample}</Code>
        </Section>
        <Section heading="JavaScript" direction="column">
          <Code language="javascript">{jsExample}</Code>
        </Section>
      </Content>
    </Page>
  );
}
