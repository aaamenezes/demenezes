import type { GetStaticPropsContext } from 'next';
import { ThemeProvider } from 'styled-components';
import Head from '../src/components/Common/Head';
import PageFooter from '../src/components/Common/PageFooter';
import PageHeader from '../src/components/Common/PageHeader';
import HomeScreen from '../src/components/Screens/HomeScreen';
import { getContent } from '../src/external/datoCMS';
import { generateSitemap } from '../src/scripts/generate-sitemap';
import { theme } from '../src/theme';
import { GlobalStyle } from '../src/theme/globalStyle';
import type { HomePageProps, PostSummaryProps } from '../src/types';
import { getPaginationInfos } from '../src/utils/getPaginationInfos';

export default function Home({
  currentPosts,
  currentPagination,
  isLastPagination,
  preview,
}: HomePageProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head
        componentProps={{
          currentPosts,
          currentPagination,
          isLastPagination,
          preview,
        }}
      />
      <GlobalStyle />
      <PageHeader />
      <HomeScreen
        currentPosts={currentPosts}
        currentPagination={currentPagination}
        isLastPagination={isLastPagination}
      />
      <PageFooter />
    </ThemeProvider>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params, preview = false } = context;
  const allPosts = await getContent('allPosts', {}, preview);

  const { currentPosts, currentPagination, isLastPagination } =
    getPaginationInfos(allPosts.data.allPosts, params?.page);

  const postsSitemapData = allPosts.data.allPosts.map(
    (post: PostSummaryProps) => ({
      slug: `posts/${post.slug}`,
      _updatedAt: post._updatedAt.split('T')[0],
    })
  );

  await generateSitemap(postsSitemapData);

  return {
    props: {
      currentPosts,
      currentPagination,
      isLastPagination,
      preview: preview !== undefined,
    },
  };
}
