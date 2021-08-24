import React from 'react'
import HeroPostCard from '../HeroPostCard'
import PostCard from '../../Common/PostCard'
import Newsletter from '../../Common/Newsletter'

export default function PostsWrapper({ postsList, heroRef }) {
  const heroPost = postsList[0]

  const firstBlockStart = 1
  const firstBlockEnd = postsList.length / 2
  const firstBlockPosts = postsList.slice(firstBlockStart, firstBlockEnd).map(
    (post, index) => (
      <PostCard
        key={post.title}
        title={post.title}
        postLink={`/posts/${ post.slug }`}
        imageURL={post.coverImage}
        imageAlt={`Imagem de capa do post: ${ post.title }`}
        imageRatio='4x3'
        index={index}
      />
    )
  )

  const secondBlockStart = firstBlockEnd
  const secondBlockEnd = postsList.length
  const secondBlockPosts = postsList.slice(
    secondBlockStart, secondBlockEnd
  ).map((post, index) => (
    <PostCard
      key={post.title}
      title={post.title}
      postLink={`/posts/${ post.slug }`}
      imageURL={post.coverImage}
      imageAlt={`Imagem de capa do post: ${ post.title }`}
      imageRatio='4x3'
      index={index}
    />
  ))

  return (
    <main>
      <HeroPostCard post={heroPost} heroRef={heroRef} />
      {firstBlockPosts}
      <Newsletter />
      {secondBlockPosts}
    </main>
  )
}
