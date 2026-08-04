import type {
  StructuredTextGraphQlResponse,
  StructuredTextGraphQlResponseRecord,
} from 'react-datocms';

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
      greetingTitle: string;
      greetingSubtitle: string;
      greetingDescription: string;
      categoriesTitle: string;
      categoryItemModule: Array<{
        categoryItemTitle: string;
        categoryItemDescription: string;
        categoryItemIcon: string;
      }>;
      historyTitle: string;
      historyText: string;
      hobbiesTitle: string;
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

type DatoRecord<TypeName extends string, Fields> =
  StructuredTextGraphQlResponseRecord & { __typename: TypeName } & Fields;

export type DatoBlock =
  | DatoRecord<
      'ImageRecord',
      {
        image: {
          alt: string;
          title: string;
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
      { tableTitle: string; tableSummary: string; table: string }
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
        title: string;
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
  | 'references';
export type PageUrl =
  | '/'
  | '/page/[page]'
  | '/posts/[slug]'
  | '/about'
  | '/contact'
  | '/references';

export interface PageProps {
  pageTitle: PageName;
  url: PageUrl;
  keywords: string[];
  description: string;
}

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
