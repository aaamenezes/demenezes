import React from 'react'
import { getAllPosts } from '../../lib/api'
import { POSTS_PER_PAGE } from '../../src/settings'
import HomeScreen from '../../src/components/Screens/HomeScreen'
import { getPaginationInfos } from '../../src/utils/getPaginationInfos'

export default function Home({
  currentPosts,
  totalPosts,
  currentPage,
  isLastPage
}) {
  return (
    <HomeScreen
      currentPosts={currentPosts}
      totalPosts={totalPosts}
      currentPage={currentPage}
      isLastPage={isLastPage}
    />
  )
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts([
    'title',
    'lead',
    'date',
    'category',
    'slug',
    'tags',
    'coverImage'
  ])

  const {
    currentPosts, totalPosts, currentPage, isLastPage
  } = getPaginationInfos(allPosts, params)

  return {
    props: { currentPosts, totalPosts, currentPage, isLastPage }
  }
}

export async function getStaticPaths() {
  const allPosts = getAllPosts([ 'slug' ])
  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)

  function createDynamicPaths(pageNumber, array = [ null ]) {
    return pageNumber > 0
      ? createDynamicPaths(
        pageNumber - 1,
        [ ...array, { params: { page: pageNumber.toString() } } ]
      )
      : [ ...array ].slice(1).reverse()
  }

  const dynamicPaths = createDynamicPaths(totalPages)

  return {
    paths: dynamicPaths,
    fallback: false // or true
  }
}
