import React from 'react'
import { POSTS_PER_PAGE } from '../../settings'
import { headerBehavior } from '../../utils/headerBehavior'
import Header from '../Common/Header'
import Footer from '../Footer'
import PostsWrapper from '../HomePage/PostsWrapper'
import Pagination from '../Pagination'

export default function HomeScreen({
  currentPosts,
  totalPosts,
  currentPage,
  isLastPage
}) {
  const [ heroRef, isMinimizeHeader ] = headerBehavior()

  return (
    <>
      <Header isMinimizeHeader={isMinimizeHeader} />
      <PostsWrapper postsList={currentPosts} heroRef={heroRef} />
      {totalPosts > POSTS_PER_PAGE && (
        <Pagination currentPage={currentPage} isLastPage={isLastPage} />
      )}
      <Footer />
    </>
  )
}
