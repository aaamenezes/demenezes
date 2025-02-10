import React from 'react';
import styled from 'styled-components';
import HighlightText from './HighlightText';
import Wrapper from '../container/Wrapper';

const StoryTitle = styled.h2`
  margin-top: ${({ theme }) => `${theme.spacing.h2}rem`};
`;

/**
 * Evento do google
 * https://events.withgoogle.com/google-em-poa/
 *
 * Bruno Souza
 * https://twitter.com/brjavaman
 *
 * Yara Senger
 * https://twitter.com/yarasenger
 */

export default function Story({
  historyTitle,
  historyText,
}: {
  historyTitle: string;
  historyText: string;
}) {
  const firstParagraph = historyText.split('\n')[0];
  const remainingText = historyText
    .split('\n')
    .slice(1)
    .map((text, index) =>
      index % 2 === 0 ? (
        <HighlightText key={text}>{text}</HighlightText>
      ) : (
        <Wrapper width="md" key={text}>
          <p>{text}</p>
        </Wrapper>
      )
    );

  return (
    <>
      <Wrapper width="md">
        <StoryTitle>{historyTitle}</StoryTitle>
        <p>{firstParagraph}</p>
      </Wrapper>
      {remainingText}
    </>
  );
}
