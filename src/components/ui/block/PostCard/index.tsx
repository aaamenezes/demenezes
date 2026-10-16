import Link from '@/components/ui/base/Link';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import { clsx } from '@/utils/clsx';
import { formatDate } from '@/utils/formatDate';
import NextImage from 'next/image';
import styles from './styles.module.css';
import type { PostCardProps } from './types';

export default function PostCard({ post, isHero, isCompact }: PostCardProps) {
  const {
    title,
    slug,
    thumbnail,
    category,
    _firstPublishedAt,
    metaDescription,
    _updatedAt,
  } = post;

  const { width, height } = thumbnail;
  const { src } = thumbnail.responsiveImage;

  const publicationDate = _firstPublishedAt;
  const updateDate = _updatedAt;
  const hasUpdated =
    (publicationDate && updateDate && updateDate > publicationDate) || false;

  return (
    <Wrapper
      direction={{
        xs: 'column',
        md: isCompact ? 'column' : 'row',
      }}
      justifyContent={{
        xs: isHero ? 'end' : 'start',
        md: isCompact ? 'start' : 'space-between',
      }}
      alignItems={isHero ? 'center' : 'start'}
      className={clsx(
        styles.wrapper,
        isCompact && styles.isCompact,
        isHero && styles.isHero
      )}
      gap="md"
      width={isHero ? 'full' : 'xl'}
    >
      <div
        className={clsx(
          styles.imageWrapper,
          isCompact && styles.isCompact,
          isHero && styles.isHero
        )}
        aria-hidden="true"
      >
        <Link
          className={clsx(styles.imageLink, isHero && styles.isHero)}
          href={`/posts/${slug}`}
          tab-index="-1"
        >
          <NextImage
            src={src}
            alt={`Imagem de capa do post: ${title}`}
            width={width}
            height={height}
            sizes="(max-width: 767px) 100vw, 30vw"
            className={clsx(styles.image, isHero && styles.isHero)}
          />
          <div className={styles.categoryText}>{category}</div>
        </Link>
      </div>
      <Wrapper
        direction="column"
        justifyContent="space-between"
        className={clsx(isCompact && styles.isCompact, isHero && styles.isHero)}
      >
        <header>
          <Text
            size="lg"
            letterSpacing="sm"
            as="strong"
            family="heading"
            weight={700}
            className={styles.title}
          >
            <Link
              className={clsx(styles.link, isHero && styles.isHero)}
              href={`/posts/${post.slug}`}
            >
              {post.title}
            </Link>
          </Text>
        </header>
        <Text
          className={clsx(
            styles.description,
            isCompact && styles.isCompact,
            isHero && styles.isHero
          )}
        >
          {metaDescription}
        </Text>
        <footer className={clsx(styles.footer, isCompact && styles.isCompact)}>
          <Text
            family="heading"
            size="xxs"
            weight={500}
            letterSpacing="md"
            className={styles.date}
          >
            {!publicationDate && 'Não publicado'}
            {publicationDate && !hasUpdated && formatDate(publicationDate)}
            {publicationDate &&
              hasUpdated &&
              'Publicado em ' + formatDate(publicationDate)}
          </Text>
          {hasUpdated && updateDate && (
            <Text
              family="heading"
              size="xxs"
              weight={500}
              letterSpacing="md"
              className={styles.date}
            >
              {`Atualizado em ${formatDate(updateDate)}`}
            </Text>
          )}
        </footer>
      </Wrapper>
    </Wrapper>
  );
}
