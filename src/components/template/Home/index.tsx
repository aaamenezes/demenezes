import { HomeScreenProps } from '../../../types';
import PostsWrapper from '../../HomePage/PostsWrapper';
import Pagination from '../../Pagination';

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
