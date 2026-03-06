import ButtonStory from '@/components/ui/base/Button/story';
import CodeStory from '@/components/ui/base/Code/story';
import type { ComponentProps, ComponentsMapProps } from './types';

const componentsMap: ComponentsMapProps = {
  base: {
    button: ButtonStory,
    code: CodeStory,
  },
};

export function getComponentByPath({ level, component }: ComponentProps) {
  return componentsMap[level]?.[component] || null;
}
