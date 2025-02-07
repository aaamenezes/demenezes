// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import styled, { css } from 'styled-components';
import getBreakpoints from '../../../utils/getBreakpoints';

const Label = styled.div`
  ${getBreakpoints({
    xs: css`
      position: absolute;
      z-index: ${({ theme }) => theme.zIndex.absolute};
      bottom: 0;
      left: 0;
      padding: 0.44rem 0.66rem;
      line-height: ${({ theme }) => theme.lineHeight.button};
      font-family: ${({ theme }) => theme.fontFamily.display};
      font-size: ${({ theme }) => theme.fontSize.small};
      letter-spacing: ${({ theme }) => theme.letterSpacing.button};
      color: ${({ theme }) => theme.color.neutral_100};
      background-color: ${({ theme }) => theme.color.red_700};
    `,
    md: css`
      bottom: 30%;
    `,
  })}
`;

export default Label;
