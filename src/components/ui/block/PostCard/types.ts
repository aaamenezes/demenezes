import type { PostSummaryProps } from '@/types/post';

export interface PostCardProps {
  post: PostSummaryProps;
  isHero?: boolean;
  isCompact?: boolean;
}
