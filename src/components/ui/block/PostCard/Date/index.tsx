import { clsx } from '@/utils/clsx';
import { formatDate } from '@/utils/formatDate';
import styles from './styles.module.css';
import type { DateProps } from './types';
import { usePostCardContext } from '../context';
import Text from '@/components/ui/base/Text';

function Date({ publicationDate, updateDate }: DateProps) {
  const { isCompact } = usePostCardContext();

  const hasUpdated =
    (publicationDate && updateDate && updateDate > publicationDate) || false;

  return (
    <footer className={clsx(styles.footer, isCompact && styles.isCompact)}>
      <Text
        family="heading"
        size="xxs"
        weight={500}
        letterSpacing="md"
        className={styles.date}
      >
        {!publicationDate && 'Não publicado'}
        {publicationDate && !hasUpdated && formatDate(publicationDate)}
        {publicationDate &&
          hasUpdated &&
          'Publicado em ' + formatDate(publicationDate)}
      </Text>

      {hasUpdated && updateDate && (
        <Text
          family="heading"
          size="xxs"
          weight={500}
          letterSpacing="md"
          className={styles.date}
        >
          {`Atualizado em ${formatDate(updateDate)}`}
        </Text>
      )}
    </footer>
  );
}

Date.displayName = 'PostCard.Date';

export default Date;
