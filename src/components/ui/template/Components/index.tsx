import Content from '@/components/designSysyem/Content';
import Page from '@/components/designSysyem/Page';
import Section from '@/components/designSysyem/Section';
import Sidebar from '@/components/designSysyem/Sidebar';
import { capitalize } from '@/utils/capitalize';
import { getComponentByPath } from './getComponentByPath';
import type { ComponentPathProps } from './types';

export default function ComponentsScreen({
  level,
  componentName,
}: ComponentPathProps) {
  const Component = getComponentByPath({ level, componentName });
  const capitalizedComponentName = capitalize.firstLetter(componentName);
  const capitalizedComponentNameWithBrackets = `<${capitalizedComponentName}>`;

  return (
    <Page>
      <Sidebar />
      <Content>
        <Section heading={`${level} / ${capitalizedComponentNameWithBrackets}`}>
          <></>
        </Section>
        <Component />
      </Content>
    </Page>
  );
}
