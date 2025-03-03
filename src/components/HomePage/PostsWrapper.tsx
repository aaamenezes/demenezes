import styled from 'styled-components';
import { getPageInfos } from '../../utils/getPageInfos';
import Newsletter from '../ui/section/Newsletter';
import PostCard from '../ui/block/PostCard';
import HeroPostCard from './HeroPostCard';
import { PostSummaryProps } from '../../types';

const StyledPostsWrapper = styled.main<{
  isHome: boolean;
}>`
  padding-top: ${({ isHome }) => !isHome && '6.6rem'};
`;

export default function PostsWrapper({
  postsList,
}: {
  postsList: PostSummaryProps[];
}) {
  const { currentPage } = getPageInfos();
  const heroPost = postsList[0];

  const isHome = currentPage === 'home';
  const firstBlockStart = isHome ? 1 : 0;
  const firstBlockEnd = postsList.length / 2;
  const firstBlockPosts = postsList
    .slice(firstBlockStart, firstBlockEnd)
    .map(post => <PostCard key={post.title} post={post} />);

  const secondBlockStart = firstBlockEnd;
  const secondBlockEnd = postsList.length;
  const secondBlockPosts = postsList
    .slice(secondBlockStart, secondBlockEnd)
    .map(post => <PostCard key={post.title} post={post} />);

  return (
    <StyledPostsWrapper isHome={isHome}>
      {isHome && <HeroPostCard post={heroPost} />}
      {firstBlockPosts}
      <Newsletter />
      {secondBlockPosts}
    </StyledPostsWrapper>
  );
}
