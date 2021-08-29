import React from 'react'
import Link from 'next/link'
import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug
}) {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link as={`/posts/${ slug }`} href='/posts/[slug]'>
          <a href='/' className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <DateFormatter dateString={date} />
      </div>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
      <Avatar />
    </div>
  )
}
