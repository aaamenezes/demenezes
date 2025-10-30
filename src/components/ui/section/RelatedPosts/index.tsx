import PostCard from '@/components/ui/block/PostCard';
import Wrapper from '@/components/ui/container/Wrapper';
import { PostSummaryProps } from '@/types';
import style from './styles.module.css';

export default function RelatedPosts({
  postCategory,
  relatedPosts,
}: {
  postCategory: string;
  relatedPosts: PostSummaryProps[];
}) {
  if (relatedPosts.length === 0) return <></>;

  const relatedPostsElements = relatedPosts.map(post => (
    <PostCard key={post.title} post={post} isCompact spacing={0} />
  ));

  return (
    <Wrapper as="section" width="xl">
      <header>
        <h2>{`Veja outros posts sobre ${postCategory}`}</h2>
      </header>
      <div className={style.relatedPostsGrid}>{relatedPostsElements}</div>
    </Wrapper>
  );
}
