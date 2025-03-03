import { HomeScreenProps } from '../../../../types';
import PostsWrapper from '../../section/PostsWrapper';
import Pagination from '../../section/Pagination';

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
