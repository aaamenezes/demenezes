import Link from '@/components/ui/base/Link';
import PostCardInfos from '@/components/ui/block/PostCard/Infos';
import PostCategory from '@/components/ui/block/PostCategory';
import Wrapper from '@/components/ui/container/Wrapper';
import type { PostSummaryProps } from '@/types';
import { clsx } from '@/utils/clsx';
import NextImage from 'next/image';
import style from './styles.module.css';

export default function PostCard({
  post,
  isCompact = false,
  spacing = 7,
}: {
  post: PostSummaryProps;
  isCompact?: boolean;
  spacing?: number;
}) {
  const { title, slug, thumbnail, category } = post;
  const { width, height } = thumbnail;
  const { src } = thumbnail.responsiveImage;

  return (
    <Wrapper
      className={clsx(style.postCardWrapper, { [style.isCompact]: isCompact })}
      width="xl"
      spacing={spacing || 7}
    >
      <div
        className={clsx(style.postCardImageWrapper, {
          [style.isCompact]: isCompact,
        })}
        aria-hidden="true"
      >
        <Link
          className={style.postCardImageLink}
          href={`/posts/${slug}`}
          tab-index="-1"
        >
          <NextImage
            src={src}
            alt={`Imagem de capa do post: ${title}`}
            width={width}
            height={height}
            sizes="(max-width: 767px) 100vw, 30vw"
            style={{
              aspectRatio: '4 / 3',
              objectFit: 'cover',
            }}
          />
          <PostCategory>{category}</PostCategory>
        </Link>
      </div>
      <PostCardInfos post={post} isCompact={isCompact} />
    </Wrapper>
  );
}
