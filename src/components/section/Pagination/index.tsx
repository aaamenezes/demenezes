import { clsx } from '../../../utils/clsx';
import LinkButton from '../../base/LinkButton';
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
        <LinkButton
          className={clsx(S.paginationButton, S.isPrevious)}
          href={previousLink}
        >
          Posts mais recentes
        </LinkButton>
      )}
      {!isLastPagination ? (
        <LinkButton className={S.paginationButton} href={nextLink}>
          Próxima página
        </LinkButton>
      ) : (
        <LinkButton className={S.paginationButton} href="/" disabled>
          Parabéns, você chegou ao início do blog :)
        </LinkButton>
      )}
    </Wrapper>
  );
}
