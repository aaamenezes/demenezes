import Heading from '@/components/ui/base/Heading';
import PostCard from '@/components/ui/block/PostCard';
import Grid from '@/components/ui/container/Grid';
import Wrapper from '@/components/ui/container/Wrapper';
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
      <Grid columns={{ xs: 1, md: 2, lg: 3 }} gap="md">
        {relatedPostsElements}
      </Grid>
    </Wrapper>
  );
}
