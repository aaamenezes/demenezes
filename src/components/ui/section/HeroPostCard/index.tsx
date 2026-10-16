import Link from '@/components/ui/base/Link';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import { formatDate } from '@/utils/formatDate';
import type { CSSProperties } from 'react';
import styles from './styles.module.css';
import type { HeroPostCardProps } from './types';

export default function HeroPostCard({ post }: HeroPostCardProps) {
  const { src } = post.thumbnail.responsiveImage;

  const separator = src.includes('?') ? '&' : '?';

  const publicationDate = post._firstPublishedAt;
  const updateDate = post._updatedAt;
  const hasUpdated =
    (publicationDate && updateDate && updateDate > publicationDate) || false;

  return (
    <div
      className={styles.heroWrapper}
      style={
        {
          '--background-image-xs': `url(${src}${separator}w=425)`,
          '--background-image-sm': `url(${src}${separator}w=768)`,
          '--background-image-md': `url(${src}${separator}w=992)`,
          '--background-image-lg': `url(${src}${separator}w=1200)`,
          '--background-image-xl': `url(${src}${separator}w=1600)`,
          '--background-image-xxl': `url(${src}${separator}w=2600)`,
        } as CSSProperties
      }
    >
      <Wrapper className={styles.heroInner} width="xxxl">
        <div className={styles.postCardInfosWrapper}>
          <Text
            size="lg"
            letterSpacing="sm"
            as="strong"
            family="heading"
            weight={700}
            className={styles.title}
          >
            <Link className={styles.link} href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </Text>
          <Text className={styles.postCardDescription}>
            {post.metaDescription}
          </Text>
          <footer className={styles.footer}>
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
        </div>
      </Wrapper>
    </div>
  );
}
