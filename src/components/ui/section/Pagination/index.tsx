import Link from '@/components/ui/base/Link';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import { clsx } from '@/utils/clsx';
import styles from './styles.module.css';
import type { PaginationProps } from './types';

export default function Pagination({
  currentPagination,
  isLastPagination,
}: PaginationProps) {
  const previousLink = `/page/${+currentPagination - 1}`.replace('page/1', '');
  const nextLink = `/page/${+currentPagination + 1}`;

  return (
    <Wrapper className={styles.paginationWrapper} width="xxl">
      {currentPagination > 1 && (
        <Link
          className={clsx(styles.paginationButton, styles.isPrevious)}
          href={previousLink}
        >
          <Text
            as="span"
            family="heading"
            size="xxs"
            weight={500}
            letterSpacing="sm"
            lineHeight="sm"
            className={styles.paginationButtonText}
          >
            Posts mais recentes
          </Text>
        </Link>
      )}
      {!isLastPagination ? (
        <Link className={styles.paginationButton} href={nextLink}>
          <Text
            as="span"
            family="heading"
            size="xxs"
            weight={500}
            letterSpacing="sm"
            lineHeight="sm"
            className={styles.paginationButtonText}
          >
            Próxima página
          </Text>
        </Link>
      ) : (
        <Link className={styles.paginationButton} href="/">
          <Text
            as="span"
            family="heading"
            size="xxs"
            weight={500}
            letterSpacing="sm"
            lineHeight="sm"
            className={styles.paginationButtonText}
          >
            Início do blog :)
          </Text>
        </Link>
      )}
    </Wrapper>
  );
}
