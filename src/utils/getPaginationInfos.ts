import { ParsedUrlQuery } from 'querystring'
import settings from '../../settings.json'
import { PostSummary } from '../types'

function getPageParam(params: ParsedUrlQuery | undefined) {
  if (!params) return 1
  if (!params.page) return 1

  if (Array.isArray(params.page)) {
    return Number(params.page[0])
  }

  return Number(params.page)
}

export function getPaginationInfos(allPosts: PostSummary[], params: ParsedUrlQuery | undefined) {
  const currentPagination = getPageParam(params)
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
