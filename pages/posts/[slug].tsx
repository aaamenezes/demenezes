import type { GetStaticPropsContext } from 'next';
import styled from 'styled-components';
import pageWrapper from '../../src/components/pageWrapper';
import PostComments from '../../src/components/PostPage/PostComments';
import PostContent from '../../src/components/PostPage/PostContent';
import PostHeader from '../../src/components/PostPage/PostHeader';
import ProgressBar from '../../src/components/PostPage/ProgressBar';
import RelatedPosts from '../../src/components/PostPage/RelatedPosts';
import { getContent } from '../../src/external/datoCMS';
import { PostProps, PostSummaryProps } from '../../src/types';
import { parseSlugParam } from '../../src/utils/parseParams';

const PostPage = styled.main`
  margin-bottom: 10%;
`;

function Post({
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
      <PostPage>
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
      </PostPage>
      <PostComments />
      <RelatedPosts postCategory={category} relatedPosts={relatedPosts} />
      <ProgressBar />
    </>
  );
}

export default pageWrapper(Post);

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params, preview } = context;
  const post = await getContent(
    'post',
    { slug: parseSlugParam(params?.slug) },
    preview,
  );

  const relatedPosts = await getContent(
    'relatedPosts',
    { category: post.data.post.category },
    preview,
  ).then((data) =>
    data.data.allPosts.filter(
      (currentPost: PostProps['data']['post']) =>
        currentPost.title !== post.data.post.title,
    ),
  );

  return {
    props: {
      post,
      relatedPosts,
      PREVIEW: preview !== undefined,
    },
    revalidate: 3600,
    /**
     * In secods:
     * 60sec * 60 = 1hour = 3600sec
     */
  };
}

export async function getStaticPaths() {
  const routes = await getContent('routes', {});

  return {
    paths: routes.data.allPosts.map((post: PostProps['data']['post']) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: 'blocking',
  };
}
