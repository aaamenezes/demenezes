import type ButtonStory from '../../base/Button/story';
import type CodeStory from '../../base/Code/story';

type Level = 'base' | 'block' | 'container' | 'section' | 'template';

export interface ComponentProps {
  level: Level;
  component: string;
}

export interface ComponentsMapProps {
  base: {
    button: typeof ButtonStory;
    code: typeof CodeStory;
  };
}
