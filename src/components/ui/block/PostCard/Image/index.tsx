import Link from '@/components/ui/base/Link';
import PostCategory from '@/components/ui/block/PostCategory';
import { clsx } from '@/utils/clsx';
import NextImage from 'next/image';
import { usePostCardContext } from '../context';
import styles from './styles.module.css';
import type { ImageProps } from './types';

function Image({ src, alt, width, height }: ImageProps) {
  const { slug, isCompact, category } = usePostCardContext();

  return (
    <div
      className={clsx(styles.wrapper, isCompact && styles.isCompact)}
      aria-hidden="true"
    >
      <Link className={styles.link} href={`/posts/${slug}`} tab-index="-1">
        <NextImage
          src={src}
          alt={alt}
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
  );
}

Image.displayName = 'PostCard.Image';

export default Image;
