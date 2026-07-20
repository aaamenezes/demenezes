import { clsx } from '@/utils/clsx';
import { convertDate } from '@/utils/convertDate';
import style from './styles.module.css';

export default function PostCardFooter({
  date,
  update,
  isCompact,
}: {
  date: string;
  update: string;
  isCompact: boolean;
}) {
  return (
    <footer
      className={clsx(style.postCardFooterWrapper, {
        [style.isCompact]: isCompact,
      })}
    >
      <p className={style.postCardDate}>
        {update && date
          ? `${update > date ? 'Publicado em ' : ''}${convertDate(date)}`
          : 'Não publicado'}
      </p>
      {update > date && (
        <p className={style.postCardDate}>
          {`Atualizado em ${convertDate(update)}`}
        </p>
      )}
    </footer>
  );
}
