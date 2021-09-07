import React from 'react'
import { getAllPosts } from '../lib/api'
import HomeScreen from '../src/components/Screens/HomeScreen'
import { getPaginationInfos } from '../src/utils/getPaginationInfos'

export default function Home({
  currentPosts,
  totalPosts,
  currentPagination,
  isLastPagination
}) {
  return (
    <HomeScreen
      currentPosts={currentPosts}
      totalPosts={totalPosts}
      currentPagination={currentPagination}
      isLastPagination={isLastPagination}
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
    currentPosts, totalPosts, currentPagination, isLastPagination
  } = getPaginationInfos(allPosts, params)

  return {
    props: { currentPosts, totalPosts, currentPagination, isLastPagination }
  }
}
