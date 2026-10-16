import type {
  StructuredTextGraphQlResponse,
  StructuredTextGraphQlResponseRecord,
} from 'react-datocms';

type Category =
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
