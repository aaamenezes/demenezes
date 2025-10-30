import Head from '@/components/meta/Head';
import PageFooter from '@/components/ui/section/PageFooter';
import PageHeader from '@/components/ui/section/PageHeader';
import HomeScreen from '@/components/ui/template/Home';
import { getContent } from '@/external/datoCMS';
import { generateSitemap } from '@/scripts/generate-sitemap';
import { HomePageProps, PostSummaryProps } from '@/types';
import { getPaginationInfos } from '@/utils/getPaginationInfos';
import type { GetStaticPropsContext } from 'next';

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
