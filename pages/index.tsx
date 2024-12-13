import type { GetStaticPropsContext } from 'next'
import pageWrapper from '../src/components/pageWrapper'
import HomeScreen from '../src/components/Screens/HomeScreen'
import { getContent } from '../src/external/datoCMS'
import { generateSitemap } from '../src/scripts/generate-sitemap.mjs'
import { PostSummary } from '../src/types'
import { getPaginationInfos } from '../src/utils/getPaginationInfos'

interface HomePageProps {
  currentPosts: PostSummary[]
  currentPagination: number
  isLastPagination: boolean
  preview: boolean
}

function Home({
  currentPosts,
  currentPagination,
  isLastPagination,
  preview
}: HomePageProps) {
  return (
    <HomeScreen
      currentPosts={currentPosts}
      currentPagination={currentPagination}
      isLastPagination={isLastPagination}
    />
  )
}

export default pageWrapper(Home)

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params, preview = false } = context
  const allPosts = await getContent('allPosts', {}, preview)

  const {
    currentPosts,
    currentPagination,
    isLastPagination
  } = getPaginationInfos(allPosts.data.allPosts, params)

  const postsSitemapData = allPosts.data.allPosts.map(
    (post: PostSummary) => ({
      slug: `posts/${post.slug}`,
      _updatedAt: post._updatedAt.split('T')[0]
    })
  )

  await generateSitemap(postsSitemapData)

  return {
    props: {
      currentPosts,
      currentPagination,
      isLastPagination,
      preview: preview !== undefined
    },
  }
}
