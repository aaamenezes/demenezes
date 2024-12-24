import React from 'react';
import styled, { css } from 'styled-components';
import getBreakpoints from '../../utils/getBreakpoints';

const PostCardDescriptionWrapper = styled.p`
  ${getBreakpoints({
    xs: css`
      display: ${({ isCompact }) => (isCompact ? 'none' : 'block')};
      padding: 0.5rem;
      margin: 1.1rem 0;
    `,
  })}
`;

export default function PostCardDescription({
  description,
  hero,
  isCompact,
}: {
  description: string;
  hero?: boolean;
  isCompact: boolean;
}) {
  return (
    <PostCardDescriptionWrapper hero={hero} isCompact={isCompact}>
      {description}
    </PostCardDescriptionWrapper>
  );
}
