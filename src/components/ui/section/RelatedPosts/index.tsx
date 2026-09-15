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
    <PostCard
      key={post.title}
      category={post.category}
      slug={post.slug}
      isCompact
    >
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
