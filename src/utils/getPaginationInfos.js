import { POSTS_PER_PAGE } from '../settings'

export function getPaginationInfos(allPosts, params) {
  const currentPage = params ? params.page : 1

  const currentPosts = allPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE
  )

  const totalPosts = allPosts.length

  const lastPage = Math.ceil(totalPosts / POSTS_PER_PAGE)
  const isLastPage = +currentPage === +lastPage

  return { currentPosts, totalPosts, currentPage, isLastPage }
}
