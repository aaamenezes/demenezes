import PostCard from '@/components/ui/block/PostCard';
import HeroPostCard from '@/components/ui/section/HeroPostCard';
import Newsletter from '@/components/ui/section/Newsletter';
import { clsx } from '@/utils/clsx';
import styles from './styles.module.css';
import type { PostsWrapperProps } from './types';

export default function PostsWrapper({ postsList, isHome }: PostsWrapperProps) {
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
    <main className={clsx(styles.postsWrapper, isHome && styles.isHome)}>
      {isHome && <HeroPostCard post={heroPost} />}
      {firstBlockPosts}
      <Newsletter />
      {secondBlockPosts}
    </main>
  );
}
