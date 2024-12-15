import React from 'react'
import PostsWrapper from '../HomePage/PostsWrapper'
import Pagination from '../Pagination'

export default function HomeScreen({
  currentPosts,
  currentPagination,
  isLastPagination
}) {
  return (
    <>
      <PostsWrapper postsList={currentPosts} />
      <Pagination
        currentPagination={currentPagination}
        isLastPagination={isLastPagination}
      />
    </>
  )
}
