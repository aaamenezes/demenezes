import Heading from '@/components/ui/base/Heading';
import PostCard from '@/components/ui/block/PostCard';
import Wrapper from '@/components/ui/container/Wrapper';
import styles from './styles.module.css';
import type { RelatedPostsProps } from './types';

export default function RelatedPosts({
  postCategory,
  relatedPosts,
}: RelatedPostsProps) {
  if (relatedPosts.length === 0) return <></>;

  const relatedPostsElements = relatedPosts.map(post => (
    <PostCard key={post.title} post={post} isCompact />
  ));

  return (
    <Wrapper as="section" width="xl">
      <header>
        <Heading>{`Veja outros posts sobre ${postCategory}`}</Heading>
      </header>
      <div className={styles.relatedPostsGrid}>{relatedPostsElements}</div>
    </Wrapper>
  );
}
