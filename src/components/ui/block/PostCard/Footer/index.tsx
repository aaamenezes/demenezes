import { clsx } from '@/utils/clsx';
import { convertDate } from '@/utils/convertDate';
import style from './styles.module.css';

export default function PostCardFooter({
  publicationDate,
  updateDate,
  isCompact,
}: {
  publicationDate: string;
  updateDate: string;
  isCompact: boolean;
}) {
  return (
    <footer
      className={clsx(style.postCardFooterWrapper, {
        [style.isCompact]: isCompact,
      })}
    >
      <p className={style.postCardDate}>
        {updateDate && publicationDate
          ? `${updateDate > publicationDate ? 'Publicado em ' : ''}${convertDate(publicationDate)}`
          : 'Não publicado'}
      </p>
      {updateDate > publicationDate && (
        <p className={clsx(style.postCardDate, style.postCardUpdateDate)}>
          {`Atualizado em ${convertDate(updateDate)}`}
        </p>
      )}
    </footer>
  );
}
