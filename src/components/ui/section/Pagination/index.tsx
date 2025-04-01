import { clsx } from '../../../../utils/clsx';
import Link from '../../base/Link';
import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

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
    <Wrapper className={S.paginationWrapper} width="xxl" spacing={2}>
      {currentPagination > 1 && (
        <Link
          className={clsx(S.paginationButton, S.isPrevious)}
          href={previousLink}
        >
          Posts mais recentes
        </Link>
      )}
      {!isLastPagination ? (
        <Link className={S.paginationButton} href={nextLink}>
          Próxima página
        </Link>
      ) : (
        <Link className={S.paginationButton} href="/">
          Parabéns, você chegou ao início do blog :)
        </Link>
      )}
    </Wrapper>
  );
}
