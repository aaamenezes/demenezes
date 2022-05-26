import React from 'react'
import styled from 'styled-components'
import { getContent } from '../../src/external/datoCMS'
import pageWrapper from '../../src/components/Wrappers/pageWrapper'
import PostHeader from '../../src/components/PostPage/PostHeader'
import PostContent from '../../src/components/PostPage/PostContent'
import PostComments from '../../src/components/PostPage/PostComments'
import RelatedPosts from '../../src/components/PostPage/RelatedPosts'
import ProgressBar from '../../src/components/PostPage/ProgressBar'

const PostPage = styled.main`
  margin-bottom: 10%;
`

function Post({ post, relatedPosts, PREVIEW }) {
  const {
    title,
    metaDescription,
    _updatedAt,
    _firstPublishedAt,
    category,
    keywords,
    thumbnail
  } = post.data.post

  return (
    <>
      <PostPage>
        <PostHeader
          title={title}
          description={metaDescription}
          date={_firstPublishedAt}
          update={_updatedAt}
          category={category}
          keywords={keywords}
          coverImage={thumbnail.url}
          preview={PREVIEW}
        />
        <PostContent post={post} />
      </PostPage>
      <PostComments />
      <RelatedPosts
        postCategory={category}
        relatedPosts={relatedPosts}
      />
      <ProgressBar />
    </>
  )
}

export default pageWrapper(Post)

export async function getStaticProps(context) {
  const { params, preview } = context
  const post = await getContent('post', { slug: params.slug }, preview)

  const relatedPosts = await getContent(
    'relatedPosts',
    { category: post.data.post.category },
    preview
  ).then(data => data.data.allPosts.filter(
    currentPost => currentPost.title !== post.data.post.title
  ))

  return {
    props: {
      post,
      relatedPosts,
      PREVIEW: preview !== undefined
    },
    revalidate: 3600
    /**
     * In secods:
     * 60sec * 60 = 1hour = 3600sec
     */
  }
}

export async function getStaticPaths() {
  const routes = await getContent('routes', {})

  return {
    paths: routes.data.allPosts.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  }
}
