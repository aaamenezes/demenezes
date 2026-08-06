import type { ReactElement } from 'react';
import BlogLayout from './BlogLayout';
import StoriesLayout from './StoriesLayout';

export function getBlogLayout(page: ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
}

export function getStoriesLayout(page: ReactElement) {
  return <StoriesLayout>{page}</StoriesLayout>;
}
