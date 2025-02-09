import { clsx } from '../../../../utils/clsx';
import { convertDate } from '../../../../utils/convertDate';
import S from './styles.module.css';

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
    <footer className={clsx(S.postCardFooterWrapper, isCompact && S.isCompact)}>
      <p className={S.postCardDate}>
        {update && date
          ? `${update > date ? 'Publicado em ' : ''}${convertDate(date)}`
          : 'Não publicado'}
      </p>
      {update > date && (
        <p className={S.postCardDate}>
          {`Atualizado em ${convertDate(update)}`}
        </p>
      )}
    </footer>
  );
}
