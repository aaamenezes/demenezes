// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled, { css } from 'styled-components';
import StructuredTextDatoCMS from '../container/StructuredTextDatoCMS';
import getBreakpoints from '../../utils/getBreakpoints';

const StyledTextBox = styled.div`
  ${getBreakpoints({
    xs: css`
      padding: 1rem;
      background-color: ${({ theme }) => theme.color.red_50};

      > *:first-child {
        margin-top: 0;
      }
    `,
    sm: css`
      padding: 1.5rem;
    `,
    md: css`
      padding: 2rem;
    `,
  })}
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TextBox({ content }: { content: any }) {
  return (
    <StyledTextBox>
      <StructuredTextDatoCMS data={content} />
    </StyledTextBox>
  );
}
