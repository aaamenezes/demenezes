import type { GetStaticPropsContext } from 'next';
import Head from '../src/components/meta/Head';
import PageFooter from '../src/components/ui/section/PageFooter';
import PageHeader from '../src/components/ui/section/PageHeader';
import HomeScreen from '../src/components/ui/template/Home';
import { getContent } from '../src/external/datoCMS';
import { generateSitemap } from '../src/scripts/generate-sitemap';
import type { HomePageProps, PostSummaryProps } from '../src/types';
import { getPaginationInfos } from '../src/utils/getPaginationInfos';

export default function Home({
  currentPosts,
  currentPagination,
  isLastPagination,
  preview,
}: HomePageProps) {
  return (
    <>
      <Head
        componentProps={{
          currentPosts,
          currentPagination,
          isLastPagination,
          preview,
        }}
      />
      <PageHeader />
      <HomeScreen
        currentPosts={currentPosts}
        currentPagination={currentPagination}
        isLastPagination={isLastPagination}
      />
      <PageFooter />
    </>
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
