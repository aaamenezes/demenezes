import React from 'react';
import styled, { css } from 'styled-components';
import { convertDate } from '../../utils/convertDate';
import getBreakpoints from '../../utils/getBreakpoints';

const PostCardFooterWrapper = styled.footer<{
  isCompact: boolean;
}>`
  ${getBreakpoints({
    xs: css`
      margin-top: 0.44rem;
      padding: 0.5rem;
    `,
    md: css`
      margin-top: ${({ isCompact }) => (isCompact ? '0.44rem' : 0)};
    `,
  })}
`;

const PostCardDate = styled.p`
  margin: 0 !important;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.display};
  letter-spacing: ${({ theme }) => theme.letterSpacing.button};
  color: ${({ theme }) => theme.color.neutral_600};
`;

export default function PostCardFooter({
  date,
  update,
  isCompact,
}: {
  date: string;
  update: string;
  isCompact: boolean;
}) {
  if (!date) return null;

  return (
    <PostCardFooterWrapper isCompact={isCompact}>
      <PostCardDate>
        {update && date
          ? `${update > date ? 'Publicado em ' : ''}${convertDate(date)}`
          : 'Não publicado'}
      </PostCardDate>
      {update > date && (
        <PostCardDate>{`Atualizado em ${convertDate(update)}`}</PostCardDate>
      )}
    </PostCardFooterWrapper>
  );
}
