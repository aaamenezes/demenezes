import { ParsedUrlQuery } from 'querystring'
import settings from '../../settings.json'
import { PostSummary } from '../types'
import { parsePageParam } from './parseParams'

export function getPaginationInfos(allPosts: PostSummary[], page: ParsedUrlQuery['page']) {
  const currentPagination = parsePageParam(page)
  const { postsPerPage } = settings.paginationConfig

  const currentPosts = allPosts.slice(
    (currentPagination - 1) * postsPerPage,
    currentPagination * postsPerPage
  )

  const TOTAL_POSTS = allPosts.length

  const lastPage = Math.ceil(TOTAL_POSTS / postsPerPage)
  const isLastPagination = +currentPagination === +lastPage

  return { currentPosts, currentPagination, isLastPagination }
}
