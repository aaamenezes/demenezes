import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import { convertDate } from '@/utils/convertDate';
import type { CSSProperties } from 'react';
import PostCategory from '../../block/PostCategory';
import style from './styles.module.css';
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
      <li className={style.keywordItem} key={clearKeyword}>
        {clearKeyword}
      </li>
    );
  });

  return (
    <div
      className={style.postHeaderWrapper}
      style={{ '--background-image': `url(${coverImage})` } as CSSProperties}
    >
      <Wrapper className={style.postHeaderInner} width="xxxl">
        <h1 className={style.postTitle}>{title}</h1>
        <Text
          family="heading"
          size="sm"
          lineHeight="md"
          className={style.postDescription}
        >
          {description}
        </Text>
        <footer className={style.postHeaderFooter}>
          <Text
            as="span"
            family="heading"
            size="xxs"
            weight={500}
            letterSpacing="xxl"
            className={style.postDate}
          >
            {update ? `Publicado em ${convertDate(date)}` : convertDate(date)}
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
                className={style.postDate}
              >
                {`Atualizado em ${convertDate(update)}`}
              </Text>
            </>
          )}
          <ul className={style.keywordsList}>{keywordsList}</ul>
        </footer>
        <PostCategory>{category}</PostCategory>
      </Wrapper>
    </div>
  );
}
