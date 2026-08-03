import Link from '@/components/ui/base/Link';
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
          <span className={style.paginationButtonText}>
            Posts mais recentes
          </span>
        </Link>
      )}
      {!isLastPagination ? (
        <Link className={style.paginationButton} href={nextLink}>
          <span className={style.paginationButtonText}>Próxima página</span>
        </Link>
      ) : (
        <Link className={style.paginationButton} href="/">
          <span className={style.paginationButtonText}>Início do blog :)</span>
        </Link>
      )}
    </Wrapper>
  );
}
