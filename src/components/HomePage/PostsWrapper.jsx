import styled from 'styled-components'
import { getPageInfos } from '../../utils/getPageInfos'
import Newsletter from '../Common/Newsletter'
import PostCard from '../Common/PostCard'
import HeroPostCard from './HeroPostCard'

const StyledPostsWrapper = styled.main`
  padding-top: ${({ isHome }) => !isHome && '6.6rem'};
`

export default function PostsWrapper({ postsList }) {
  const { CURRENT_PAGE } = getPageInfos()
  const heroPost = postsList[0]

  const isHome = CURRENT_PAGE === 'home'
  const firstBlockStart = isHome ? 1 : 0
  const firstBlockEnd = postsList.length / 2
  const firstBlockPosts = postsList
    .slice(firstBlockStart, firstBlockEnd)
    .map(post => <PostCard key={post.title} post={post} />)

  const secondBlockStart = firstBlockEnd
  const secondBlockEnd = postsList.length
  const secondBlockPosts = postsList
    .slice(secondBlockStart, secondBlockEnd)
    .map(post => <PostCard key={post.title} post={post} />)

  return (
    <StyledPostsWrapper isHome={isHome}>
      {isHome && <HeroPostCard post={heroPost} />}
      {firstBlockPosts}
      <Newsletter />
      {secondBlockPosts}
    </StyledPostsWrapper>
  )
}
