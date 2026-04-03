import ButtonStory from '../../base/Button/story';
import CodeStory from '../../base/Code/story';
import type { Level, ComponentsMapProps } from './types';

export const componentsByLevelMap: ComponentsMapProps = {
  base: {
    button: ButtonStory,
    code: CodeStory,
  },
  block: {},
  container: {},
  section: {},
  template: {},
};

export const levels: Level[] = Object.keys(componentsByLevelMap) as Level[];
