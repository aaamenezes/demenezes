import Content from '@/components/designSysyem/Content';
import Page from '@/components/designSysyem/Page';
import Section from '@/components/designSysyem/Section';
import Sidebar from '@/components/designSysyem/Sidebar';
import { getComponentByPath } from './getComponentByPath';
import type { ComponentPathProps } from './types';
import { capitalize } from '@/utils/capitalize';

export default function ComponentsScreen({
  level,
  componentName,
}: ComponentPathProps) {
  const Component = getComponentByPath({ level, componentName });
  const capitalizedComponentName = capitalize(componentName);
  const capitalizedComponentNameWithBrackets = `<${capitalizedComponentName}>`;

  return (
    <Page>
      <Sidebar />
      <Content>
        <Section
          heading={`${level} / ${capitalizedComponentNameWithBrackets}`}
          direction="row"
        >
          <></>
        </Section>
        <Component />
      </Content>
    </Page>
  );
}
