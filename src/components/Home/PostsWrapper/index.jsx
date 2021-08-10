import React from 'react'
import HeroPostCard from '../../common/HeroPostCard'
import PostCard from '../../common/PostCard'

export default function PostsWrapper({ postsList }) {
  const heroPost = postsList[0]
  const postsListElements = postsList.slice(1).map((post, index) => (
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
      <HeroPostCard post={heroPost} />
      {postsListElements}
    </main>
  )
}
