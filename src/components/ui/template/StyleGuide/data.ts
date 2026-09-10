import CodeStory from '@/components/ui/base/BlockCode/story';
import ButtonStory from '@/components/ui/base/Button/story';
import CmsIconStory from '@/components/ui/base/CmsIcon/story';
import FigureStory from '@/components/ui/base/Figure/story';
import HeadingStory from '@/components/ui/base/Heading/story';
import HiddenA11YStory from '@/components/ui/base/HiddenA11Y/story';
import InputStory from '@/components/ui/base/Input/story';
import LinkStory from '@/components/ui/base/Link/story';
import TextStory from '@/components/ui/base/Text/story';
import VideoStory from '@/components/ui/base/Video/story';
import YouTubeStory from '@/components/ui/base/YouTube/story';
import BlockQuoteStory from '@/components/ui/block/BlockQuote/story';
import LogoStory from '@/components/ui/block/Logo/story';
import PostCardStory from '@/components/ui/block/PostCard/story';
import ProgressBarStory from '@/components/ui/block/ProgressBar/story';
import TableStory from '@/components/ui/block/Table/story';
import GridStory from '@/components/ui/container/Grid/story';
import NavigationStory from '@/components/ui/container/Navigation/story';
import SocialMediaStory from '@/components/ui/container/SocialMedia/story';
import WrapperStory from '@/components/ui/container/Wrapper/story';
import AboutCategoriesStory from '@/components/ui/section/AboutCategories/story';
import AboutContactFormStory from '@/components/ui/section/AboutContactForm/story';
import AboutGreetingStory from '@/components/ui/section/AboutGreeting/story';
import AboutHighlightTextStory from '@/components/ui/section/AboutHighlightText/story';
import AboutHobbiesStory from '@/components/ui/section/AboutHobbies/story';
import AboutStoryStory from '@/components/ui/section/AboutStory/story';
import HeroPostCardStory from '@/components/ui/section/HeroPostCard/story';
import NewsletterStory from '@/components/ui/section/Newsletter/story';
import PageFooterStory from '@/components/ui/section/PageFooter/story';
import PageHeaderStory from '@/components/ui/section/PageHeader/story';
import PaginationStory from '@/components/ui/section/Pagination/story';
import PostCommentsStory from '@/components/ui/section/PostComments/story';
import PostContentStory from '@/components/ui/section/PostContent/story';
import PostHeaderStory from '@/components/ui/section/PostHeader/story';
import PostsWrapperStory from '@/components/ui/section/PostsWrapper/story';
import RelatedPostsStory from '@/components/ui/section/RelatedPosts/story';
import { keysOf } from '@/utils/object';
import type { ComponentsMapProps, Level } from './types';

export const componentsByLevelMap: ComponentsMapProps = {
  base: {
    button: ButtonStory,
    code: CodeStory,
    cmsIcon: CmsIconStory,
    heading: HeadingStory,
    hiddenA11Y: HiddenA11YStory,
    figure: FigureStory,
    input: InputStory,
    link: LinkStory,
    text: TextStory,
    video: VideoStory,
    youTube: YouTubeStory,
  },
  block: {
    blockQuote: BlockQuoteStory,
    logo: LogoStory,
    postCard: PostCardStory,
    progressBar: ProgressBarStory,
    table: TableStory,
  },
  container: {
    grid: GridStory,
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
    postHeader: PostHeaderStory,
    postsWrapper: PostsWrapperStory,
    relatedPosts: RelatedPostsStory,
  },
  template: {},
};

export const levels: Level[] = keysOf(componentsByLevelMap);
