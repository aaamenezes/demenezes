import ButtonStory from '@/components/ui/base/Button/story';
import CodeStory from '@/components/ui/base/Code/story';
import type { ComponentPathProps, ComponentsMapProps } from './types';

const componentsMap: ComponentsMapProps = {
  base: {
    button: ButtonStory,
    code: CodeStory,
  },
  block: {},
  container: {},
  section: {},
  template: {},
};

export function getComponentByPath({
  level,
  componentName: component,
}: ComponentPathProps) {
  return componentsMap[level]?.[component] || null;
}
