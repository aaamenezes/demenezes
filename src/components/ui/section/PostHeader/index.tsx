import { CSSProperties } from 'react';
import { convertDate } from '../../../../utils/convertDate';
import Label from '../../base/Label';
import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

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
      <li className={S.keywordItem} key={clearKeyword}>
        {clearKeyword}
      </li>
    );
  });

  console.log('keywords:', keywords);

  return (
    <div
      className={S.postHeaderWrapper}
      style={{ '--background-image': `url(${coverImage})` } as CSSProperties}
    >
      <Wrapper width="full" isFluid>
        <Wrapper className={S.postHeaderInner} width="xxxl" spacing={0}>
          <h1 className={S.postTitle}>{title}</h1>
          <p className={S.leadText}>
            <strong>{description}</strong>
          </p>
          <footer className={S.postHeaderFooter}>
            <span className={S.postDate}>
              {update && date
                ? `Publicado em ${convertDate(date)}`
                : 'Não publicado'}
            </span>
            {update > date && (
              <span className={S.postDate}>
                {`Atualizado em ${convertDate(update)}`}
              </span>
            )}
            <ul className={S.keywordsList}>{keywordsList}</ul>
          </footer>
          <Label>{category}</Label>
        </Wrapper>
      </Wrapper>
    </div>
  );
}
