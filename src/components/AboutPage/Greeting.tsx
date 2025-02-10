import React from 'react';
import NextImage from 'next/image';
import styled, { css } from 'styled-components';
import HiddenA11Y from '../base/HiddenA11Y';
import getBreakpoints from '../../utils/getBreakpoints';
import Wrapper from '../container/Wrapper';

const StyledGreeting = styled.section`
  ${getBreakpoints({
    xs: css`
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem 0;
      padding-top: 6.6rem;
    `,
    md: css`
      grid-template-columns: 1fr 1fr;
      grid-gap: 0 2rem;
    `,
  })}
`;

const ImageWrapper = styled.div`
  ${getBreakpoints({
    md: css`
      grid-row: 1 / 3;
    `,
  })}
`;

const GreetingTitle = styled.h2`
  margin-top: 0;
`;

const GreetingText = styled.p`
  ${getBreakpoints({
    xs: css`
      text-align: center;
    `,
    md: css`
      text-align: left;
    `,
  })}
`;

export default function Greeting({
  greetingTitle,
  greetingSubtitle,
  greetingDescription,
  profileImage,
}: {
  greetingTitle: string;
  greetingSubtitle: string;
  greetingDescription: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profileImage: any;
}) {
  const { src } = profileImage.responsiveImage;
  const { alt, width, height } = profileImage;

  return (
    <Wrapper as={StyledGreeting} width="lg">
      <ImageWrapper>
        <NextImage
          src={src}
          alt={alt}
          sizes="(max-width: 767px) 100vw,
                 (max-width: 1199px) 50vw,
                                     33vw"
          width={width}
          height={height}
        />
      </ImageWrapper>
      <h1>
        <HiddenA11Y>{greetingTitle}</HiddenA11Y>
      </h1>
      <GreetingTitle>{greetingSubtitle}</GreetingTitle>
      <GreetingText>{greetingDescription}</GreetingText>
    </Wrapper>
  );
}
