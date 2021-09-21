import React from 'react'
import { getAllPosts } from '../lib/api'
import HomeScreen from '../src/components/Screens/HomeScreen'
import pageWrapper from '../src/components/Wrappers/pageWrapper'
import { BLOG_DESCRIPTION_BASE, BLOG_TITLE_BASE } from '../src/settings'
import { getPaginationInfos } from '../src/utils/getPaginationInfos'

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

export default pageWrapper(Home, {
  pageTitle: BLOG_TITLE_BASE,
  pageDescription: BLOG_DESCRIPTION_BASE,
  keyWords: [
    'front-end', 'programação', 'carreira'
  ]
})

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
