import React from 'react'
import { getAllPosts } from '../lib/api'
import HomeScreen from '../src/components/Screens/HomeScreen'
import { getPaginationInfos } from '../src/utils/getPaginationInfos'

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
