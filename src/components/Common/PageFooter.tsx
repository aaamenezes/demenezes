// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled, { css } from 'styled-components';
import getBreakpoints from '../../utils/getBreakpoints';
import Container from './Container';
import LogoWrapper from './LogoWrapper';
import SocialMedia from './SocialMedia';

const FooterWrapper = styled.footer`
  padding: 2.2rem;
  margin-top: auto;
  margin-bottom: 0;
  color: ${({ theme }) => theme.color.neutral_100};
  background-color: ${({ theme }) => theme.color.neutral_900};
`;

const FooterInner = styled.div`
  ${getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${({ theme }) => theme.color.neutral_900};

      > *:not(:last-child) {
        margin-bottom: 1.1rem;
      }
    `,
    md: css`
      flex-direction: row-reverse;
      justify-content: space-between;

      > *:not(:last-child) {
        margin-bottom: 0;
        margin-right: 1.1rem;
      }
    `,
  })}
`;

export default function PageFooter() {
  return (
    <Container as={FooterWrapper} width="full" fluid>
      <Container as={FooterInner} width="xxxl" spacing={0}>
        <SocialMedia />
        <LogoWrapper />
      </Container>
    </Container>
  );
}
