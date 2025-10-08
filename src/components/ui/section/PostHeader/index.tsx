import { CSSProperties } from 'react';
import { convertDate } from '../../../../utils/convertDate';
import Label from '../../base/Label';
import Wrapper from '../../container/Wrapper';
import style from './styles.module.css';
import { clsx } from '../../../../utils/clsx';

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
      <li className={clsx(style.keywordItem, 'postKeyword')} key={clearKeyword}>
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
          <h1 className={clsx(style.postTitle, 'postTitle')}>{title}</h1>
          <p>
            <strong className={clsx(style.postDescription, 'postDescription')}>
              {description}
            </strong>
          </p>
          <footer className={style.postHeaderFooter}>
            <span className={clsx(style.postDate, 'postDate')}>
              {update && date
                ? `Publicado em ${convertDate(date)}`
                : 'Não publicado'}
            </span>
            {update > date && (
              <span className={clsx(style.postDate, 'postDate')}>
                {`Atualizado em ${convertDate(update)}`}
              </span>
            )}
            <ul className={style.keywordsList}>{keywordsList}</ul>
          </footer>
          <Label>{category}</Label>
        </Wrapper>
      </Wrapper>
    </div>
  );
}
