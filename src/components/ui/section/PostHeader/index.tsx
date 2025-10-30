import Wrapper from '@/components/ui/container/Wrapper';
import { clsx } from '@/utils/clsx';
import { convertDate } from '@/utils/convertDate';
import { CSSProperties } from 'react';
import fontStyle from '../../../styles/fontStyles.module.css';
import PostCategory from '../../block/PostCategory';
import style from './styles.module.css';

export default function PostHeader({
  title,
  description,
  date,
  update,
  category,
  keywords,
  coverImage,
}: {
  title: string;
  description: string;
  date: string;
  update: string;
  category: string;
  keywords: string;
  coverImage: string;
}) {
  const keywordsList = keywords.split(',').map(keyword => {
    const clearKeyword = keyword.trim();
    return (
      <li
        className={clsx(style.keywordItem, fontStyle.postKeyword)}
        key={clearKeyword}
      >
        {clearKeyword}
      </li>
    );
  });

  return (
    <div
      className={style.postHeaderWrapper}
      style={{ '--background-image': `url(${coverImage})` } as CSSProperties}
    >
      <Wrapper width="full" isFluid>
        <Wrapper className={style.postHeaderInner} width="xxxl" spacing={0}>
          <h1 className={clsx(style.postTitle, fontStyle.postTitle)}>
            {title}
          </h1>
          <p>
            <strong
              className={clsx(style.postDescription, fontStyle.postDescription)}
            >
              {description}
            </strong>
          </p>
          <footer className={style.postHeaderFooter}>
            <span className={clsx(style.postDate, fontStyle.postDate)}>
              {update && date
                ? `Publicado em ${convertDate(date)}`
                : 'Não publicado'}
            </span>
            {update > date && (
              <>
                <span aria-hidden="true"> - </span>
                <span className={clsx(style.postDate, fontStyle.postDate)}>
                  {`Atualizado em ${convertDate(update)}`}
                </span>
              </>
            )}
            <ul className={style.keywordsList}>{keywordsList}</ul>
          </footer>
          <PostCategory>{category}</PostCategory>
        </Wrapper>
      </Wrapper>
    </div>
  );
}
