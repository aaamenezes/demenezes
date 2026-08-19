import Link from '@/components/ui/base/Link';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import { clsx } from '@/utils/clsx';
import style from './styles.module.css';

export default function Pagination({
  currentPagination,
  isLastPagination,
}: {
  currentPagination: number;
  isLastPagination: boolean;
}) {
  const previousLink = `/page/${+currentPagination - 1}`.replace('page/1', '');
  const nextLink = `/page/${+currentPagination + 1}`;

  return (
    <Wrapper className={style.paginationWrapper} width="xxl">
      {currentPagination > 1 && (
        <Link
          className={clsx(style.paginationButton, style.isPrevious)}
          href={previousLink}
        >
          <Text
            as="span"
            family="heading"
            size="xxs"
            weight={500}
            letterSpacing="sm"
            lineHeight="sm"
            className={style.paginationButtonText}
          >
            Posts mais recentes
          </Text>
        </Link>
      )}
      {!isLastPagination ? (
        <Link className={style.paginationButton} href={nextLink}>
          <Text
            as="span"
            family="heading"
            size="xxs"
            weight={500}
            letterSpacing="sm"
            lineHeight="sm"
            className={style.paginationButtonText}
          >
            Próxima página
          </Text>
        </Link>
      ) : (
        <Link className={style.paginationButton} href="/">
          <Text
            as="span"
            family="heading"
            size="xxs"
            weight={500}
            letterSpacing="sm"
            lineHeight="sm"
            className={style.paginationButtonText}
          >
            Início do blog :)
          </Text>
        </Link>
      )}
    </Wrapper>
  );
}
