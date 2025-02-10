// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import styled, { css } from 'styled-components';
import getBreakpoints from '../utils/getBreakpoints';
import LinkButton from './base/LinkButton';
import Wrapper from './container/Wrapper';

const PaginationWrapper = styled.div`
  ${getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      align-items: center;

      > a:nth-child(2) {
        margin: 2.2rem 0 0;
      }
    `,
    md: css`
      flex-direction: row;
      justify-content: flex-end;

      > a:nth-child(2) {
        margin: 0;
        margin-left: auto;
      }
    `,
  })}
`;

const PaginationButton = styled(LinkButton)<{
  label: string;
  disabled?: boolean;
}>`
  ${getBreakpoints({
    xs: css`
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      line-height: ${({ theme }) => theme.lineHeight.button};
      padding: 0.66rem;
      border-radius: ${({ theme }) => theme.borderRadius};
      border: 1px solid
        ${({ theme, disabled }) =>
          theme.color.neutral_900 + (disabled ? theme.opacity.light.hex : '')};
      transition: ${({ theme }) => theme.transition.fast};
      cursor: pointer;

      &::after {
        content: '';
        position: absolute;
        z-index: ${({ theme }) => theme.zIndex.under};
        ${({ label }) => (label === 'previous' ? 'right: 0;' : 'left: 0;')}
        height: 100%;
        width: 0;
        background-color: ${({ theme }) => theme.color.red_500};
        transition: ${({ theme }) => theme.transition.fast};
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.color.neutral_50};
        border-color: ${({ theme }) => theme.color.red_500};
        &::after {
          width: 100%;
        }
      }
    `,
    md: css`
      width: initial;
    `,
  })}
`;

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
    <Wrapper as={PaginationWrapper} width="xxl" spacing={2}>
      {currentPagination > 1 && (
        <PaginationButton href={previousLink} label="previous">
          Posts mais recentes
        </PaginationButton>
      )}
      {!isLastPagination ? (
        <PaginationButton href={nextLink} label="next">
          Próxima página
        </PaginationButton>
      ) : (
        <PaginationButton href="/" label="next" disabled>
          Parabéns, você chegou ao início do blog :)
        </PaginationButton>
      )}
    </Wrapper>
  );
}
