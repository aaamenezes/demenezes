import type { GetStaticPropsContext } from 'next';
import settings from '../../settings.json';
import pageWrapper from '../../src/components/pageWrapper';
import HomeScreen from '../../src/components/Screens/HomeScreen';
import { getContent } from '../../src/external/datoCMS';
import { PostSummaryProps } from '../../src/types';
import { getPaginationInfos } from '../../src/utils/getPaginationInfos';

function Home({
  currentPosts,
  currentPagination,
  isLastPagination,
}: {
  currentPosts: PostSummaryProps[];
  currentPagination: number;
  isLastPagination: boolean;
}) {
  return (
    <HomeScreen
      currentPosts={currentPosts}
      currentPagination={currentPagination}
      isLastPagination={isLastPagination}
    />
  );
}

export default pageWrapper(Home);

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
    revalidate: 3600,
    /**
     * In secods:
     * 60sec * 60 = 1hour = 3600sec
     */
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

  function createDynamicPaths(
    pageNumber: number,
    array: PageParam[] = [],
  ): PageParam[] {
    return Array.from({ length: postsPerPage }, (_, index) => {
      return {
        params: {
          page: (pageNumber * postsPerPage + index + 1).toString(),
        },
      };
    });
    // return pageNumber > 0
    //   ? createDynamicPaths(pageNumber - 1, [
    //       ...array,
    //       { params: { page: pageNumber.toString() } },
    //     ])
    //   : [...array].reverse();
  }

  const dynamicPaths = createDynamicPaths(totalPages);

  return {
    paths: dynamicPaths,
    fallback: 'blocking',
  };
}
