import { keysOf } from '@/utils/object';
import ButtonStory from '../../base/Button/story';
import CmsIconStory from '../../base/CmsIcon/story';
import CodeStory from '../../base/Code/story';
import HiddenA11YStory from '../../base/HiddenA11Y/story';
import IframeStory from '../../base/Iframe/story';
import ImageStory from '../../base/Image/story';
import InputStory from '../../base/Input/story';
import LinkStory from '../../base/Link/story';
import VideoStory from '../../base/Video/story';
import BlockQuoteStory from '../../block/BlockQuote/story';
import LogoStory from '../../block/Logo/story';
import PostCardStory from '../../block/PostCard/story';
import ProgressBarStory from '../../block/ProgressBar/story';
import TableStory from '../../block/Table/story';
import NavigationStory from '../../container/Navigation/story';
import SocialMediaStory from '../../container/SocialMedia/story';
import WrapperStory from '../../container/Wrapper/story';
import AboutCategoriesStory from '../../section/AboutCategories/story';
import AboutContactFormStory from '../../section/AboutContactForm/story';
import AboutGreetingStory from '../../section/AboutGreeting/story';
import AboutHighlightTextStory from '../../section/AboutHighlightText/story';
import AboutHobbiesStory from '../../section/AboutHobbies/story';
import AboutStoryStory from '../../section/AboutStory/story';
import HeroPostCardStory from '../../section/HeroPostCard/story';
import NewsletterStory from '../../section/Newsletter/story';
import PageFooterStory from '../../section/PageFooter/story';
import PageHeaderStory from '../../section/PageHeader/story';
import PaginationStory from '../../section/Pagination/story';
import PostCommentsStory from '../../section/PostComments/story';
import PostContentStory from '../../section/PostContent/story';
import type { ComponentsMapProps, Level } from './types';

export const componentsByLevelMap: ComponentsMapProps = {
  base: {
    button: ButtonStory,
    code: CodeStory,
    cmsIcon: CmsIconStory,
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
    postCard: PostCardStory,
    progressBar: ProgressBarStory,
    table: TableStory,
  },
  container: {
    navigation: NavigationStory,
    socialMedia: SocialMediaStory,
    wrapper: WrapperStory,
  },
  section: {
    aboutCategories: AboutCategoriesStory,
    aboutContactForm: AboutContactFormStory,
    aboutGreeting: AboutGreetingStory,
    aboutHighlightText: AboutHighlightTextStory,
    aboutHobbies: AboutHobbiesStory,
    aboutStory: AboutStoryStory,
    heroPostCard: HeroPostCardStory,
    newsletter: NewsletterStory,
    pageFooter: PageFooterStory,
    pageHeader: PageHeaderStory,
    pagination: PaginationStory,
    postComments: PostCommentsStory,
    postContent: PostContentStory,
  },
  template: {},
};

export const levels: Level[] = keysOf(componentsByLevelMap);
