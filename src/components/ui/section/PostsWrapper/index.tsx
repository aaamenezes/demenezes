import PostCard from '@/components/ui/block/PostCard';
import HeroPostCard from '@/components/ui/block/PostCard/Header';
import Newsletter from '@/components/ui/section/Newsletter';
import type { PostSummaryProps } from '@/types';
import { clsx } from '@/utils/clsx';
import { getPageInfos } from '@/utils/getPageInfos';
import style from './styles.module.css';

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

  // { [style.isHome]: !isHome } ??????
  return (
    <main className={clsx(style.postsWrapper, { [style.isHome]: !isHome })}>
      {isHome && <HeroPostCard post={heroPost} />}
      {firstBlockPosts}
      <Newsletter />
      {secondBlockPosts}
    </main>
  );
}
