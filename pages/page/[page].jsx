import React from 'react'
import { getAllPosts } from '../../lib/api'
import { POSTS_PER_PAGE } from '../../src/settings'
import HomeScreen from '../../src/components/Screens/HomeScreen'
import { getPaginationInfos } from '../../src/utils/getPaginationInfos'
import pageWrapper from '../../src/components/Wrappers/pageWrapper'

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
  const allPosts = getAllPosts([
    'title',
    'description',
    'date',
    'category',
    'slug',
    'keywords',
    'coverImage'
  ])

  const {
    CURRENT_POSTS, TOTAL_POSTS, CURRENT_PAGINATION, IS_LAST_PAGINATION
  } = getPaginationInfos(allPosts, params)

  return {
    props: {
      CURRENT_POSTS,
      TOTAL_POSTS,
      CURRENT_PAGINATION,
      IS_LAST_PAGINATION
    }
  }
}

export async function getStaticPaths() {
  const allPosts = getAllPosts([ 'slug' ])
  const TOTAL_POSTS = allPosts.length
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

  return {
    paths: dynamicPaths,
    fallback: false // or true
  }
}
