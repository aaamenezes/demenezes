import Pagination from '@/components/ui/section/Pagination';
import PostsWrapper from '@/components/ui/section/PostsWrapper';
import { HomeScreenProps } from '@/types';

export default function HomeScreen({
  currentPosts,
  currentPagination,
  isLastPagination,
}: HomeScreenProps) {
  return (
    <>
      <PostsWrapper postsList={currentPosts} />
      <Pagination
        currentPagination={currentPagination}
        isLastPagination={isLastPagination}
      />
    </>
  );
}
