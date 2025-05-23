import type { GetStaticPropsContext } from 'next';
import ProgressBar from '../../src/components/ui/block/ProgressBar';
import PageFooter from '../../src/components/ui/section/PageFooter';
import PageHeader from '../../src/components/ui/section/PageHeader';
import PostComments from '../../src/components/ui/section/PostComments';
import PostContent from '../../src/components/ui/section/PostContent';
import PostHeader from '../../src/components/ui/section/PostHeader';
import RelatedPosts from '../../src/components/ui/section/RelatedPosts';
import { getContent } from '../../src/external/datoCMS';
import { PostProps, PostSummaryProps } from '../../src/types';
import { parseParam } from '../../src/utils/parseParam';
import Head from '../../src/components/meta/Head';

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
