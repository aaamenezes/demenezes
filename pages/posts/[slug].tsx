import type { GetStaticPropsContext } from 'next';
import styled, { ThemeProvider } from 'styled-components';
import PostComments from '../../src/components/ui/section/PostComments';
import PostContent from '../../src/components/ui/section/PostContent';
import PostHeader from '../../src/components/PostPage/PostHeader';
import ProgressBar from '../../src/components/ui/block/ProgressBar';
import RelatedPosts from '../../src/components/PostPage/RelatedPosts';
import { getContent } from '../../src/external/datoCMS';
import { theme } from '../../src/theme';
import { GlobalStyle } from '../../src/theme/globalStyle';
import { PostProps, PostSummaryProps } from '../../src/types';
import { parseSlugParam } from '../../src/utils/parseParams';
import PageHeader from '../../src/components/ui/section/PageHeader';
import PageFooter from '../../src/components/ui/section/PageFooter';

const PostPage = styled.main`
  margin-bottom: 10%;
`;

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageHeader />
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
      <PageFooter />
    </ThemeProvider>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params, preview } = context;
  const post = await getContent(
    'post',
    { slug: parseSlugParam(params?.slug) },
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
