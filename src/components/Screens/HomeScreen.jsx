import React from 'react'
import { POSTS_PER_PAGE } from '../../settings'
import PageHeader from '../Common/PageHeader'
import Footer from '../Footer'
import PostsWrapper from '../HomePage/PostsWrapper'
import Pagination from '../Pagination'

export default function HomeScreen({
  CURRENT_POSTS,
  TOTAL_POSTS,
  CURRENT_PAGINATION,
  IS_LAST_PAGINATION
}) {
  return (
    <>
      <PageHeader />
      <PostsWrapper postsList={CURRENT_POSTS} />
      {TOTAL_POSTS > POSTS_PER_PAGE && (
        <Pagination
          CURRENT_PAGINATION={CURRENT_PAGINATION}
          IS_LAST_PAGINATION={IS_LAST_PAGINATION}
        />
      )}
      <Footer />
    </>
  )
}
