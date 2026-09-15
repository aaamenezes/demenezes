import type { Category } from '@/types';
import type { ReactNode } from 'react';

export interface PostCardProps {
  children: ReactNode;
  slug: string;
  category: Category;
  isCompact?: boolean;
  isHero?: boolean;
}
