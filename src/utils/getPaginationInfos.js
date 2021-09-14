import { POSTS_PER_PAGE } from '../settings'

export function getPaginationInfos(allPosts, params) {
  const CURRENT_PAGINATION = params ? params.page : 1

  const CURRENT_POSTS = allPosts.slice(
    (CURRENT_PAGINATION - 1) * POSTS_PER_PAGE,
    CURRENT_PAGINATION * POSTS_PER_PAGE
  )

  const TOTAL_POSTS = allPosts.length

  const lastPage = Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE)
  const IS_LAST_PAGINATION = +CURRENT_PAGINATION === +lastPage

  return { CURRENT_POSTS, TOTAL_POSTS, CURRENT_PAGINATION, IS_LAST_PAGINATION }
}
