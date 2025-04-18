import NextImage from 'next/image';
import { PostSummaryProps } from '../../../../types';
import { clsx } from '../../../../utils/clsx';
import Label from '../../base/Label';
import Link from '../../base/Link';
import Wrapper from '../../container/Wrapper';
import PostCardInfos from './Infos';
import S from './styles.module.css';

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
      className={clsx(S.postCardWrapper, isCompact && S.isCompact)}
      width="xl"
      spacing={spacing || 7}
    >
      <div
        className={clsx(S.postCardImageWrapper, isCompact && S.isCompact)}
        aria-hidden="true"
      >
        <Link
          className={S.postCardImageLink}
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
          <Label>{category}</Label>
        </Link>
      </div>
      <PostCardInfos post={post} isCompact={isCompact} />
    </Wrapper>
  );
}
