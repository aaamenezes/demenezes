import { PostSummaryProps } from '../../../../types';
import { clsx } from '../../../../utils/clsx';
import { getPageInfos } from '../../../../utils/getPageInfos';
import PostCard from '../../block/PostCard';
import HeroPostCard from '../HeroPostCard';
import Newsletter from '../Newsletter';
import S from './styles.module.css';

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
    <main className={clsx(S.postsWrapper, isHome && S.isHome)}>
      {isHome && <HeroPostCard post={heroPost} />}
      {firstBlockPosts}
      <Newsletter />
      {secondBlockPosts}
    </main>
  );
}
