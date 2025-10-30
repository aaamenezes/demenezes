import Head from '@/components/meta/Head';
import ProgressBar from '@/components/ui/block/ProgressBar';
import PageFooter from '@/components/ui/section/PageFooter';
import PageHeader from '@/components/ui/section/PageHeader';
import PostComments from '@/components/ui/section/PostComments';
import PostContent from '@/components/ui/section/PostContent';
import PostHeader from '@/components/ui/section/PostHeader';
import RelatedPosts from '@/components/ui/section/RelatedPosts';
import { getContent } from '@/external/datoCMS';
import type { PostProps, PostSummaryProps } from '@/types';
import { parseParam } from '@/utils/parseParam';
import type { GetStaticPropsContext } from 'next';

export default function Post({
  post,
  relatedPosts,
}: {
  post: PostProps;
  relatedPosts: PostSummaryProps[];
}) {
  const {
    title,
    metaDescription,
    _updatedAt,
    _firstPublishedAt,
    category,
    keywords,
    thumbnail,
  } = post.data.post;

  return (
    <>
      <Head componentProps={{ post }} />
      <PageHeader />
      <main style={{ marginBottom: '10%' }}>
        <PostHeader
          title={title}
          description={metaDescription}
          date={_firstPublishedAt}
          update={_updatedAt}
          category={category}
          keywords={keywords}
          coverImage={thumbnail.responsiveImage.src}
        />
        <PostContent post={post} />
      </main>
      <PostComments />
      <RelatedPosts postCategory={category} relatedPosts={relatedPosts} />
      <ProgressBar />
      <PageFooter />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params, preview } = context;
  const post = await getContent(
    'post',
    { slug: parseParam(params?.slug, '/') },
    preview
  );

  const relatedPosts = await getContent(
    'relatedPosts',
    { category: post.data.post.category },
    preview
  ).then(data =>
    data.data.allPosts.filter(
      (currentPost: PostProps['data']['post']) =>
        currentPost.title !== post.data.post.title
    )
  );

  return {
    props: {
      post,
      relatedPosts,
      PREVIEW: preview !== undefined,
    },
  };
}

export async function getStaticPaths() {
  const routes = await getContent('routes', {});
  const paths = routes.data.allPosts.map((post: PostProps['data']['post']) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
