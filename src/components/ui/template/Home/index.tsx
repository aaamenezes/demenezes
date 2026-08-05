import Pagination from '@/components/ui/section/Pagination';
import PostsWrapper from '@/components/ui/section/PostsWrapper';
import type { HomeScreenProps } from '@/types';
import { getPageInfos } from '@/utils/getPageInfos';

export default function HomeScreen({
  currentPosts,
  currentPagination,
  isLastPagination,
}: HomeScreenProps) {
  const { currentPage } = getPageInfos();

  return (
    <>
      <PostsWrapper postsList={currentPosts} isHome={currentPage === 'home'} />
      <Pagination
        currentPagination={currentPagination}
        isLastPagination={isLastPagination}
      />
    </>
  );
}
