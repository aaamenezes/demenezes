export type Category = 'Front-end' | 'Carreira' | 'Pessoas' | 'Produtividade' | 'Ferramentas' | 'Equipamentos'

export interface PostSummary {
  title: string
  slug: string
  metaDescription: string
  _firstPublishedAt: string
  _updatedAt: string
  category: Category
  keywords: string
  thumbnail: {
    alt: string
    width: number
    height: number
    responsiveImage: {
      src: string
    }
  }
}

/**
 * {
 *   slug: string
 *   _updatedAt?: string
 * }
 */
export type SitemapItem = Pick<PostSummary, 'slug'> & Partial<Pick<PostSummary, '_updatedAt'>>