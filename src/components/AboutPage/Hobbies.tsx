import React from 'react';
import styled from 'styled-components';
import Wrapper from '../container/Wrapper';

const HobbiesTitle = styled.h2`
  margin-top: ${({ theme }) => `${theme.spacing.h2}rem`};
`;

export default function Hobbies({
  hobbiesTitle,
  hobbiesText,
}: {
  hobbiesTitle: string;
  hobbiesText: string;
}) {
  return (
    <Wrapper as="section" width="md">
      <HobbiesTitle>{hobbiesTitle}</HobbiesTitle>
      <p>{hobbiesText}</p>
    </Wrapper>
  );
}
