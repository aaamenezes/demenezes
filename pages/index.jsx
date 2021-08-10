import React from 'react'
import { useRouter } from 'next/router'
import { getAllPosts } from '../lib/api'
import Header from '../src/components/common/Header'
import Footer from '../src/components/Footer'
import PostsWrapper from '../src/components/Home/PostsWrapper'
import Pagination from '../src/components/Pagination'

// import Container from '../components/container'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
// import Intro from '../components/intro'
// import Layout from '../components/layout'
// import Head from 'next/head'
// import { CMS_NAME } from '../lib/constants'

export default function Home({ allPosts }) {
  const router = useRouter()
  const postsPerPage = 5
  const currentPage = router.query.page || 1

  const postsList = allPosts.slice(
    (currentPage - 1) * postsPerPage, currentPage * postsPerPage
  )

  const lastPage = Math.ceil(allPosts.length / postsPerPage)
  const isLastPage = +currentPage === +lastPage

  return (
    <>
      <Header />
      <PostsWrapper postsList={postsList} />
      {allPosts.length > postsPerPage && (
        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          isLastPage={isLastPage}
        />
      )}
      <Footer />
    </>
  )
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  // return (
  //   <Layout>
  //     <Head>
  //       <title>Next.js Blog Example with {CMS_NAME}</title>
  //     </Head>
  //     <Container>
  //       <Intro />
  //       {heroPost && (
  //         <HeroPost
  //           title={heroPost.title}
  //           coverImage={heroPost.coverImage}
  //           date={heroPost.date}
  //           author={heroPost.author}
  //           slug={heroPost.slug}
  //           excerpt={heroPost.excerpt}
  //         />
  //       )}
  //       {morePosts.length > 0 && <MoreStories posts={morePosts} />}
  //     </Container>
  //   </Layout>
  // )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPosts }
  }
}
