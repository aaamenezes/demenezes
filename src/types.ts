import type {
  StructuredTextGraphQlResponse,
  StructuredTextGraphQlResponseRecord,
} from 'react-datocms';

export type FontSize =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type LetterSpacing =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

export type LineHeight =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

export type FontFamily = 'body' | 'heading' | 'monospace';

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

export type Category =
  | 'Front-end'
  | 'Carreira'
  | 'Pessoas'
  | 'Produtividade'
  | 'Ferramentas'
  | 'Equipamentos';

export interface PostProps {
  data: {
    post: {
      title: string;
      seoTitle?: string;
      slug: string;
      content: StructuredTextGraphQlResponse<DatoBlock>;
      metaDescription: string;
      _firstPublishedAt: string;
      _updatedAt: string;
      category: Category;
      keywords: string;
      thumbnail: {
        alt: string;
        width: number;
        height: number;
        responsiveImage: {
          src: string;
        };
      };
    };
  };
}

type DatoRecord<
  TypeName extends string,
  Fields,
> = StructuredTextGraphQlResponseRecord & { __typename: TypeName } & Fields;

export type DatoBlock =
  | DatoRecord<
      'ImageRecord',
      {
        image: {
          alt: string;
          caption: string;
          width: number;
          height: number;
          responsiveImage: { src: string };
        };
      }
    >
  | DatoRecord<
      'ExternalVideoRecord',
      { video: { title: string; providerUid: string } }
    >
  | DatoRecord<'VideoRecord', { video: { url: string; alt: string } }>
  | DatoRecord<
      'TableRecord',
      { caption: string; tableSummary: string; table: string }
    >
  | DatoRecord<
      'TextBoxRecord',
      { textBoxContent: StructuredTextGraphQlResponse<DatoBlock> }
    >
  | DatoRecord<
      'BlockquoteRecord',
      {
        quoteContent: StructuredTextGraphQlResponse<DatoBlock>;
        author: string;
        source: string;
      }
    >
  | DatoRecord<'TweetRecord', { tweetEmbedCodeblock: string }>
  | DatoRecord<
      'QuizRecord',
      {
        question: string;
        alternativeOne: string;
        alternativeTwo: string;
        alternativeThree: string;
        alternativeFour: string;
        correctAlternativeIndex: number;
      }
    >;

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

export interface AllPostsProps {
  data: {
    allPosts: PostSummaryProps[];
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

export type PostSummaryProps = Pick<
  PostProps['data']['post'],
  | 'title'
  | 'slug'
  | 'metaDescription'
  | '_firstPublishedAt'
  | '_updatedAt'
  | 'category'
  | 'keywords'
  | 'thumbnail'
>;

/**
 * {
 *   slug: string
 *   _updatedAt?: string
 * }
 */
export type SitemapItem = Pick<PostSummaryProps, 'slug'> &
  Partial<Pick<PostSummaryProps, '_updatedAt'>>;

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

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export type Spacing =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';
