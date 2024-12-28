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
      slug: string;
      content: {
        /**
         * Acho que daqui pra baixo não compensa tipar corretamente
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        blocks: any[];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value: any;
      };
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
