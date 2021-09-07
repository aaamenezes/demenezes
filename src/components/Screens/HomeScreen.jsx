import React from 'react'
import { headerBehavior } from '../../BlogContext/headerBehavior'
import { POSTS_PER_PAGE } from '../../settings'
import Header from '../Common/Header'
import Footer from '../Footer'
import PostsWrapper from '../HomePage/PostsWrapper'
import Pagination from '../Pagination'

export default function HomeScreen({
  currentPosts,
  totalPosts,
  currentPagination,
  isLastPagination
}) {
  const [ heroRef, isMinimizeHeader ] = headerBehavior()

  return (
    <>
      <Header isMinimizeHeader={isMinimizeHeader} />
      <PostsWrapper postsList={currentPosts} heroRef={heroRef} />
      {totalPosts > POSTS_PER_PAGE && (
        <Pagination
          currentPagination={currentPagination}
          isLastPagination={isLastPagination}
        />
      )}
      <Footer />
    </>
  )
}
