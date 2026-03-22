import Content from '@/components/designSysyem/Content';
import Page from '@/components/designSysyem/Page';
import Section from '@/components/designSysyem/Section';
import Sidebar from '@/components/designSysyem/Sidebar';
import { getComponentByPath } from './getComponentByPath';
import type { ComponentPathProps } from './types';

export default function ComponentsScreen({
  level,
  componentName: component,
}: ComponentPathProps) {
  const Component = getComponentByPath({ level, componentName: component });

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
