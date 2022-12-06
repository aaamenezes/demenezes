import React from 'react'
import HomeScreen from '../src/components/Screens/HomeScreen'
import pageWrapper from '../src/components/pageWrapper'
import { getContent } from '../src/external/datoCMS'
import { getPaginationInfos } from '../src/utils/getPaginationInfos'

function Home({
  CURRENT_POSTS,
  CURRENT_PAGINATION,
  IS_LAST_PAGINATION,
  PREVIEW
}) {
  return (
    <HomeScreen
      CURRENT_POSTS={CURRENT_POSTS}
      CURRENT_PAGINATION={CURRENT_PAGINATION}
      IS_LAST_PAGINATION={IS_LAST_PAGINATION}
      PREVIEW={PREVIEW}
    />
  )
}

export default pageWrapper(Home)

export async function getStaticProps(context) {
  const { params, preview } = context
  const allPosts = await getContent('allPosts', {}, preview)

  const {
    CURRENT_POSTS,
    CURRENT_PAGINATION,
    IS_LAST_PAGINATION
  } = getPaginationInfos(allPosts.data.allPosts, params)

  return {
    props: {
      CURRENT_POSTS,
      CURRENT_PAGINATION,
      IS_LAST_PAGINATION,
      PREVIEW: preview !== undefined
    },
    revalidate: 3600
    /**
     * In secods:
     * 60sec * 60 = 1hour = 3600sec
     */
  }
}
