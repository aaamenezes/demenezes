import { POSTS_PER_PAGE } from '../settings'

export function getPaginationInfos(allPosts, params) {
  const currentPagination = params ? params.page : 1

  const currentPosts = allPosts.slice(
    (currentPagination - 1) * POSTS_PER_PAGE, currentPagination * POSTS_PER_PAGE
  )

  const totalPosts = allPosts.length

  const lastPage = Math.ceil(totalPosts / POSTS_PER_PAGE)
  const isLastPagination = +currentPagination === +lastPage

  return { currentPosts, totalPosts, currentPagination, isLastPagination }
}
