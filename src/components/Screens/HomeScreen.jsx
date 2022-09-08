import React from 'react'
import PostsWrapper from '../HomePage/PostsWrapper'
import Pagination from '../Pagination'

export default function HomeScreen({
  CURRENT_POSTS,
  CURRENT_PAGINATION,
  IS_LAST_PAGINATION
}) {
  return (
    <>
      <PostsWrapper postsList={CURRENT_POSTS} />
      <Pagination
        CURRENT_PAGINATION={CURRENT_PAGINATION}
        IS_LAST_PAGINATION={IS_LAST_PAGINATION}
      />
    </>
  )
}
