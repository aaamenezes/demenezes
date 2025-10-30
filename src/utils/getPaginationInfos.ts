import settings from '@/data/settings.json';
import { PostSummaryProps } from '@/types';
import { ParsedUrlQuery } from 'querystring';
import { parseParam } from './parseParam';

export function getPaginationInfos(
  allPosts: PostSummaryProps[],
  page: ParsedUrlQuery['page']
) {
  const currentPagination = Number(parseParam(page, '1'));
  if (Number.isNaN(currentPagination)) {
    return {
      currentPosts: [],
      currentPagination: 1,
      isLastPagination: true,
    };
  }
  const { postsPerPage } = settings.paginationConfig;

  const currentPosts = allPosts.slice(
    (currentPagination - 1) * postsPerPage,
    currentPagination * postsPerPage
  );

  const totalPosts = allPosts.length;

  const lastPage = Math.ceil(totalPosts / postsPerPage);
  const isLastPagination = +currentPagination === +lastPage;

  return { currentPosts, currentPagination, isLastPagination };
}
