import React from 'react'
import styled from 'styled-components'
import pageWrapper from '../../src/components/Wrappers/pageWrapper'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import PostHeader from '../../src/components/PostPage/PostHeader'
import PostContent from '../../src/components/PostPage/PostContent'
// import PostComments from '../../src/components/PostPage/PostComments'
// import RelatedPosts from '../../src/components/PostPage/RelatedPosts'

const PostPage = styled.main``

function Post({ post }) {
  return (
    <>
      <PostPage>
        <PostHeader
          title={post.title}
          description={post.description}
          date={post.date}
          category={post.category}
          keywords={post.keywords}
          coverImage={post.coverImage}
        />
        <PostContent content={post.content} />
      </PostPage>
      {/* <PostComments /> */}
      {/* <RelatedPosts /> */}
    </>
  )
}

export default pageWrapper(Post)

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'description',
    'date',
    'category',
    'keywords',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts([ 'slug' ])

  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  }
}
