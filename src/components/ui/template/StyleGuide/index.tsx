import Content from '@/components/styleGuide/Content';
import Page from '@/components/styleGuide/Page';
import Section from '@/components/styleGuide/Section';
import Sidebar from '@/components/styleGuide/Sidebar';
import { capitalize } from '@/utils/capitalize';
import { getComponentByPath } from './getComponentByPath';
import type { StyleGuideScreenProps } from './types';

export default function StyleGuideScreen({
  level,
  componentName,
}: StyleGuideScreenProps) {
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
