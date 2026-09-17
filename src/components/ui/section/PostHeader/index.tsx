import Heading from '@/components/ui/base/Heading';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import { formatDate } from '@/utils/formatDate';
import type { CSSProperties } from 'react';
import styles from './styles.module.css';
import type { PostHeaderProps } from './types';

export default function PostHeader({
  title,
  description,
  date,
  update,
  category,
  keywords,
  coverImage,
}: PostHeaderProps) {
  const keywordsList = keywords.split(',').map(keyword => {
    const clearKeyword = keyword.trim();
    return (
      <li className={styles.keywordItem} key={clearKeyword}>
        {clearKeyword}
      </li>
    );
  });

  return (
    <div
      className={styles.postHeaderWrapper}
      style={{ '--background-image': `url(${coverImage})` } as CSSProperties}
    >
      <Wrapper className={styles.postHeaderInner} width="xxxl">
        <Heading level={1} size="xxxl" letterSpacing="sm">
          {title}
        </Heading>
        <Text
          family="heading"
          size="sm"
          lineHeight="md"
          className={styles.postDescription}
        >
          {description}
        </Text>
        <footer className={styles.postHeaderFooter}>
          <Text
            as="span"
            family="heading"
            size="xxs"
            weight={500}
            letterSpacing="xxl"
            className={styles.postDate}
          >
            {update ? `Publicado em ${formatDate(date)}` : formatDate(date)}
          </Text>
          {update > date && (
            <>
              <Text as="span" ariaHidden={true}>
                {' '}
                -{' '}
              </Text>
              <Text
                as="span"
                family="heading"
                size="xxs"
                weight={500}
                letterSpacing="xxl"
                className={styles.postDate}
              >
                {`Atualizado em ${formatDate(update)}`}
              </Text>
            </>
          )}
          <ul className={styles.keywordsList}>{keywordsList}</ul>
        </footer>
        <div className={styles.category}>{category}</div>
      </Wrapper>
    </div>
  );
}
