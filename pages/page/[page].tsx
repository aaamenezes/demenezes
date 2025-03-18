import type { GetStaticPropsContext } from 'next';
import settings from '../../settings.json';
import Head from '../../src/components/meta/Head';
import PageFooter from '../../src/components/ui/section/PageFooter';
import PageHeader from '../../src/components/ui/section/PageHeader';
import HomeScreen from '../../src/components/ui/template/Home';
import { getContent } from '../../src/external/datoCMS';
import { PostSummaryProps } from '../../src/types';
import { getPaginationInfos } from '../../src/utils/getPaginationInfos';

export default function Home({
  currentPosts,
  currentPagination,
  isLastPagination,
}: {
  currentPosts: PostSummaryProps[];
  currentPagination: number;
  isLastPagination: boolean;
}) {
  return (
    <>
      <Head
        componentProps={{
          currentPosts,
          currentPagination,
          isLastPagination,
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
  const { params } = context;
  const allPosts = await getContent('allPosts', {});

  const { currentPosts, currentPagination, isLastPagination } =
    getPaginationInfos(allPosts.data.allPosts, params?.page);

  return {
    props: {
      currentPosts,
      currentPagination,
      isLastPagination,
    },
  };
}

export async function getStaticPaths() {
  const { postsPerPage } = settings.paginationConfig;
  const allPosts = await getContent('routes', {});
  const totalPosts = allPosts.data.allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  interface PageParam {
    params: {
      page: string;
    };
  }

  function createDynamicPaths(pageNumber: number): PageParam[] {
    return Array.from({ length: pageNumber }, (item, index) => {
      return {
        params: {
          page: (index + 1).toString(),
        },
      };
    });
  }

  const dynamicPaths = createDynamicPaths(totalPages);

  return {
    paths: dynamicPaths,
    fallback: false,
  };
}
