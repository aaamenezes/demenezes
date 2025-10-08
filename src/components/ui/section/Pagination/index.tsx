import { clsx } from '../../../../utils/clsx';
import Link from '../../base/Link';
import Wrapper from '../../container/Wrapper';
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
    <Wrapper className={style.paginationWrapper} width="xxl" spacing={2}>
      {currentPagination > 1 && (
        <Link
          className={clsx(style.paginationButton, style.isPrevious)}
          href={previousLink}
        >
          Posts mais recentes
        </Link>
      )}
      {!isLastPagination ? (
        <Link className={style.paginationButton} href={nextLink}>
          Próxima página
        </Link>
      ) : (
        <Link className={style.paginationButton} href="/">
          Parabéns, você chegou ao início do blog :)
        </Link>
      )}
    </Wrapper>
  );
}
