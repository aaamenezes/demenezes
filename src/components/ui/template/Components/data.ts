import ButtonStory from '../../base/Button/story';
import CodeStory from '../../base/Code/story';
import HiddenA11YStory from '../../base/HiddenA11Y/story';
import type { Level, ComponentsMapProps } from './types';

export const componentsByLevelMap: ComponentsMapProps = {
  base: {
    button: ButtonStory,
    code: CodeStory,
    hiddenA11Y: HiddenA11YStory,
  },
  block: {},
  container: {},
  section: {},
  template: {},
};

export const levels: Level[] = Object.keys(componentsByLevelMap) as Level[];
