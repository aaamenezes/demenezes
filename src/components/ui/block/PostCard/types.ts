import type { PostCardProps } from './Root/types';

export type PostCardContextValue = Pick<
  PostCardProps,
  'isCompact' | 'isHero' | 'category' | 'slug'
>;
