import React from 'react'
import styled from 'styled-components'
import { serialize } from 'next-mdx-remote/serialize'
import pageWrapper from '../../src/components/Wrappers/pageWrapper'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import PostHeader from '../../src/components/PostPage/PostHeader'
import PostContent from '../../src/components/PostPage/PostContent'
import PostComments from '../../src/components/PostPage/PostComments'
import RelatedPosts from '../../src/components/PostPage/RelatedPosts'
import ProgressBar from '../../src/components/PostPage/ProgressBar'
import Image from '../../src/components/Common/Image'

const components = { Image }

const PostPage = styled.main`
  margin-bottom: 10%;
`

function Post({ post, mdxContent }) {
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
        <PostContent
          content={post.content} // remover esse no futuro
          mdxContent={mdxContent}
          components={components}
        />
      </PostPage>
      <PostComments />
      <RelatedPosts
        postCategory={post.category}
        relatedPosts={post.relatedPosts}
      />
      <ProgressBar />
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

  const relatedPosts = getAllPosts([
    'category', 'title', 'coverImage', 'slug'
  ]).filter(
    currentPost => currentPost.category === post.category
  )

  const mdxContent = await serialize(content)

  return {
    props: {
      post: {
        ...post,
        content,
        relatedPosts
      },
      mdxContent
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
