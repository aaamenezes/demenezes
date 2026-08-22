import { clsx } from '@/utils/clsx';
import { convertDate } from '@/utils/convertDate';
import PostCardDateText from './PostCardDateText';
import style from './styles.module.css';
import type { PostCardFooterProps } from './types';

export default function PostCardFooter({
  publicationDate,
  updateDate,
  isCompact,
}: PostCardFooterProps) {
  function getPublicationDateContent() {
    if (!publicationDate) return 'Não publicado';
    if (!updateDate) return 'Não publicado';

    if (updateDate > publicationDate) {
      return 'Publicado em ' + convertDate(publicationDate);
    }

    return convertDate(publicationDate);
  }

  return (
    <footer
      className={clsx(
        style.postCardFooterWrapper,
        isCompact && style.isCompact
      )}
    >
      <PostCardDateText>{getPublicationDateContent()}</PostCardDateText>
      {updateDate > publicationDate && (
        <PostCardDateText>
          {`Atualizado em ${convertDate(updateDate)}`}
        </PostCardDateText>
      )}
    </footer>
  );
}
