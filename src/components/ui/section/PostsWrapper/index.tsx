import PostCard from '@/components/ui/block/PostCard';
import Newsletter from '@/components/ui/section/Newsletter';
import type { PostSummaryProps } from '@/types';
import { clsx } from '@/utils/clsx';
import HeroPostCard from '../HeroPostCard';
import style from './styles.module.css';

export default function PostsWrapper({
  postsList,
  isHome = false,
}: {
  postsList: PostSummaryProps[];
  isHome?: boolean;
}) {
  const heroPost = postsList[0];

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
    <main className={clsx(style.postsWrapper, { [style.isHome]: isHome })}>
      {isHome && <HeroPostCard post={heroPost} />}
      {firstBlockPosts}
      <Newsletter />
      {secondBlockPosts}
    </main>
  );
}
