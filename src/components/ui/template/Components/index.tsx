import Content from '@/components/designSysyem/Content';
import Page from '@/components/designSysyem/Page';
import Section from '@/components/designSysyem/Section';
import Sidebar from '@/components/designSysyem/Sidebar';
import { getComponentByPath } from './getComponentByPath';
import type { ComponentProps } from './types';

export default function ComponentsScreen({ level, component }: ComponentProps) {
  const Component = getComponentByPath({ level, component });

  return (
    <Page>
      <Sidebar />
      <Content>
        <Section heading="Filled" direction="row">
          <h1>
            {level} / {component}
          </h1>
        </Section>
        <Component />
      </Content>
    </Page>
  );
}
