import React from 'react'
import settings from '../../settings.json'
import HomeScreen from '../../src/components/Screens/HomeScreen'
import { getPaginationInfos } from '../../src/utils/getPaginationInfos'
import pageWrapper from '../../src/components/Wrappers/pageWrapper'
import { getContent } from '../../src/external/datoCMS'

function Home({
  CURRENT_POSTS,
  TOTAL_POSTS,
  CURRENT_PAGINATION,
  IS_LAST_PAGINATION
}) {
  return (
    <HomeScreen
      CURRENT_POSTS={CURRENT_POSTS}
      TOTAL_POSTS={TOTAL_POSTS}
      CURRENT_PAGINATION={CURRENT_PAGINATION}
      IS_LAST_PAGINATION={IS_LAST_PAGINATION}
    />
  )
}

export default pageWrapper(Home)

export async function getStaticProps({ params }) {
  const allPosts = await getContent('allPosts', {})

  const {
    CURRENT_POSTS, TOTAL_POSTS, CURRENT_PAGINATION, IS_LAST_PAGINATION
  } = getPaginationInfos(allPosts.data.allPosts, params)

  return {
    props: {
      CURRENT_POSTS,
      TOTAL_POSTS,
      CURRENT_PAGINATION,
      IS_LAST_PAGINATION
    },
    revalidate: 3600
    /**
     * In secods:
     * 60sec * 60 = 1hour = 3600sec
     */
  }
}

export async function getStaticPaths() {
  const { POSTS_PER_PAGE } = settings.PAGINATION_CONFIG
  const allPosts = await getContent('routes', {})
  const TOTAL_POSTS = allPosts.data.allPosts.length
  const totalPages = Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE)

  function createDynamicPaths(pageNumber, array = []) {
    return pageNumber > 0
      ? createDynamicPaths(
        pageNumber - 1,
        [ ...array, { params: { page: pageNumber.toString() } } ]
      )
      : [ ...array ].reverse()
  }

  const dynamicPaths = createDynamicPaths(totalPages)

  // const dynamicPaths = []
  // let counter = 1

  // while (counter <= totalPages) {
  //   dynamicPaths.push({ params: { page: counter } })
  //   counter++
  // }

  // function createDynamicPaths(totalPages) {
  //   return Array(totalPages)
  //     .fill(0)
  //     .map((page, index) => page + index + 1)
  // }

  return {
    paths: dynamicPaths,
    fallback: false // or true
  }
}
