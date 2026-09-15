import PostCard from '@/components/ui/block/PostCard';
import HeroPostCard from '@/components/ui/section/HeroPostCard';
import Newsletter from '@/components/ui/section/Newsletter';
import { clsx } from '@/utils/clsx';
import styles from './styles.module.css';
import type { PostsWrapperProps } from './types';
import type { PostSummaryProps } from '@/types';

export default function PostsWrapper({ postsList, isHome }: PostsWrapperProps) {
  const heroPost = postsList[0];

  function buildPostCard(post: PostSummaryProps) {
    return (
      <PostCard key={post.title} category={post.category} slug={post.slug}>
        <PostCard.Image
          width={post.thumbnail.width}
          height={post.thumbnail.height}
          alt={post.thumbnail.alt}
          src={post.thumbnail.responsiveImage.src}
        ></PostCard.Image>
        <PostCard.Infos>
          <PostCard.Title>{post.title}</PostCard.Title>
          <PostCard.Description>{post.metaDescription}</PostCard.Description>
          <PostCard.Date
            publicationDate={post._firstPublishedAt}
            updateDate={post._updatedAt}
          />
        </PostCard.Infos>
      </PostCard>
    );
  }

  const firstBlockStart = isHome ? 1 : 0;
  const firstBlockEnd = postsList.length / 2;
  const firstBlockPosts = postsList
    .slice(firstBlockStart, firstBlockEnd)
    .map(buildPostCard);

  const secondBlockStart = firstBlockEnd;
  const secondBlockEnd = postsList.length;
  const secondBlockPosts = postsList
    .slice(secondBlockStart, secondBlockEnd)
    .map(buildPostCard);

  return (
    <main className={clsx(styles.postsWrapper, isHome && styles.isHome)}>
      {isHome && <HeroPostCard post={heroPost} />}
      {firstBlockPosts}
      <Newsletter />
      {secondBlockPosts}
    </main>
  );
}
