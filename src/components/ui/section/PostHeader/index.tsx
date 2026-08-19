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
        <p className={style.postDescription}>{description}</p>
        <footer className={style.postHeaderFooter}>
          <span className={style.postDate}>
            {update ? `Publicado em ${convertDate(date)}` : convertDate(date)}
          </span>
          {update > date && (
            <>
              <Text as="span" ariaHidden={true}>
                {' '}
                -{' '}
              </Text>
              <span className={style.postDate}>
                {`Atualizado em ${convertDate(update)}`}
              </span>
            </>
          )}
          <ul className={style.keywordsList}>{keywordsList}</ul>
        </footer>
        <PostCategory>{category}</PostCategory>
      </Wrapper>
    </div>
  );
}
