import React from 'react'
import settings from '../../settings.json'
import HomeScreen from '../../src/components/Screens/HomeScreen'
import { getPaginationInfos } from '../../src/utils/getPaginationInfos'
import pageWrapper from '../../src/components/pageWrapper'
import { getContent } from '../../src/external/datoCMS'
import type { GetStaticProps, GetStaticPaths } from 'next'

function Home({
  currentPosts,
  currentPagination,
  isLastPagination
}) {
  return (
    <HomeScreen
      currentPosts={currentPosts}
      currentPagination={currentPagination}
      isLastPagination={isLastPagination}
    />
  )
}

export default pageWrapper(Home)

export async function getStaticProps({ params }): GetStaticProps {
  const allPosts = await getContent('allPosts', {})

  const {
    currentPosts,
    currentPagination,
    isLastPagination
  } = getPaginationInfos(allPosts.data.allPosts, params)

  return {
    props: {
      currentPosts,
      currentPagination,
      isLastPagination
    },
    revalidate: 3600
    /**
     * In secods:
     * 60sec * 60 = 1hour = 3600sec
     */
  }
}

export async function getStaticPaths(): GetStaticPaths {
  const { postsPerPage } = settings.paginationConfig
  const allPosts = await getContent('routes', {})
  const totalPosts = allPosts.data.allPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  function createDynamicPaths(pageNumber, array = []) {
    return pageNumber > 0
      ? createDynamicPaths(
        pageNumber - 1,
        [...array, { params: { page: pageNumber.toString() } }]
      )
      : [...array].reverse()
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
    fallback: 'blocking'
  }
}
