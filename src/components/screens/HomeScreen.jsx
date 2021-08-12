import React from 'react'
import { POSTS_PER_PAGE } from '../../../lib/constants'
import Header from '../common/Header'
import Footer from '../Footer'
import PostsWrapper from '../Home/PostsWrapper'
import Pagination from '../Pagination'

export default function HomeScreen({
  currentPosts,
  totalPosts,
  currentPage,
  isLastPage
}) {
  return (
    <>
      <Header />
      <PostsWrapper postsList={currentPosts} />
      {totalPosts > POSTS_PER_PAGE && (
        <Pagination
          currentPage={currentPage}
          isLastPage={isLastPage}
        />
      )}
      <Footer />
    </>
  )
}
