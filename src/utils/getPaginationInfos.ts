import {ParsedUrlQuery} from 'querystring';
import settings from '../../settings.json';
import {PostSummaryProps} from '../types';
import {parsePageParam} from './parseParams';

export function getPaginationInfos(
  allPosts: PostSummaryProps[],
  page: ParsedUrlQuery['page'],
) {
  const currentPagination = parsePageParam(page);
  const {postsPerPage} = settings.paginationConfig;

  const currentPosts = allPosts.slice(
    (currentPagination - 1) * postsPerPage,
    currentPagination * postsPerPage,
  );

  const totalPosts = allPosts.length;

  const lastPage = Math.ceil(totalPosts / postsPerPage);
  const isLastPagination = +currentPagination === +lastPage;

  return {currentPosts, currentPagination, isLastPagination};
}
