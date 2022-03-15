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

function Post({ post, relatedPosts }) {
  const {
    title,
    metaDescription,
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
          category={category}
          keywords={keywords}
          coverImage={thumbnail.url}
        />
        <PostContent post={post} />
      </PostPage>
      <PostComments />
      <RelatedPosts
        postCategory={category}
        relatedPosts={relatedPosts.data.allPosts}
      />
      <ProgressBar />
    </>
  )
}

export default pageWrapper(Post)

export async function getStaticProps({ params }) {
  const post = await getContent('post', { slug: params.slug })
  const relatedPosts = await getContent(
    'relatedPosts',
    { category: post.data.post.category }
  )

  return {
    props: { post, relatedPosts }
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
