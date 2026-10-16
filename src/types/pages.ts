import type { PostProps, PostSummaryProps } from './post';

/**
 * está muito ruim HomePagePros ~ HomeScreenProps
 * melhorar isso
 */
export interface HomePageProps {
  currentPosts: PostSummaryProps[];
  currentPagination: number;
  isLastPagination: boolean;
  preview: boolean;
}

export type HomeScreenProps = Pick<
  HomePageProps,
  'currentPagination' | 'currentPosts' | 'isLastPagination'
>;

export interface ContactPageProps {
  data: {
    contactSection: {
      contactTitle: string;
      contactText: string;
    };
    profileImage: {
      profileImage: {
        alt: string;
        responsiveImage: {
          srcSet: string;
        };
      };
    };
  };
}

export interface AboutPageProps {
  data: {
    profileImage: {
      profileImage: {
        alt: string;
        width: number;
        height: number;
        responsiveImage: {
          src: string;
        };
      };
    };
    aboutPage: {
      greetingHeading: string;
      greetingSubheading: string;
      greetingDescription: string;
      categoriesHeading: string;
      categoryItemModule: Array<{
        categoryItemTitle: string;
        categoryItemDescription: string;
        categoryItemIcon: string;
      }>;
      historyHeading: string;
      historyText: string;
      hobbiesHeading: string;
      hobbiesText: string;
    };
  };
}

export interface ReferencesProps {
  data: {
    allReferences: Array<{
      url: string;
      referenceType: string;
    }>;
  };
}

export interface AllPostsProps {
  data: {
    allPosts: PostSummaryProps[];
  };
}

export interface RoutesProps {
  data: {
    allPosts: Array<Pick<PostProps['data']['post'], 'slug'>>;
  };
}

export interface RelatedPostsProps {
  data: {
    allPosts: PostSummaryProps[];
  };
}

export type PageName =
  | 'home'
  | 'listing'
  | 'post'
  | 'about'
  | 'contact'
  | 'references'
  | 'style-guide';

export type PageUrl =
  | '/'
  | '/page/[page]'
  | '/posts/[slug]'
  | '/about'
  | '/contact'
  | '/references'
  | '/style-guide';

export interface PageProps {
  pageTitle: PageName;
  url: PageUrl;
  keywords: string[];
  description: string;
}
