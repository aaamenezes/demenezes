import ButtonStory from '../../base/Button/story';
import CodeStory from '../../base/Code/story';
import HiddenA11YStory from '../../base/HiddenA11Y/story';
import IframeStory from '../../base/Iframe/story';
import ImageStory from '../../base/Image/story';
import InputStory from '../../base/Input/story';
import LinkStory from '../../base/Link/story';
import VideoStory from '../../base/Video/story';
import BlockQuoteStory from '../../block/BlockQuote/story';
import LogoStory from '../../block/Logo/story';
import type { ComponentsMapProps, Level } from './types';

export const componentsByLevelMap: ComponentsMapProps = {
  base: {
    button: ButtonStory,
    code: CodeStory,
    hiddenA11Y: HiddenA11YStory,
    iframe: IframeStory,
    image: ImageStory,
    input: InputStory,
    link: LinkStory,
    video: VideoStory,
  },
  block: {
    blockQuote: BlockQuoteStory,
    logo: LogoStory,
  },
  container: {},
  section: {},
  template: {},
};

export const levels: Level[] = Object.keys(componentsByLevelMap) as Level[];
