// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled, { css } from 'styled-components';
import Container from '../Common/Container';
import PostCard from '../Common/PostCard';
import getBreakpoints from '../../utils/getBreakpoints';
import { PostSummaryProps } from '../../types';

const RelatedPostsGrid = styled.div`
  ${getBreakpoints({
    xs: css`
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: ${({ theme }) => `${theme.spacing.h3}rem`};
    `,
    md: css`
      grid-template-columns: repeat(2, 1fr);
      gap: 0;
    `,
    lg: css`
      grid-template-columns: repeat(3, 1fr);
    `,
  })}
`;

export default function RelatedPosts({
  postCategory,
  relatedPosts,
}: {
  postCategory: string;
  relatedPosts: PostSummaryProps[];
}) {
  if (relatedPosts.length === 0) return <></>;

  const relatedPostsElements = relatedPosts.map(post => (
    <PostCard key={post.title} post={post} isCompact spacing={0} />
  ));

  return (
    <Container as="section" width="xl">
      <header>
        <h2>{`Veja outros posts sobre ${postCategory}`}</h2>
      </header>
      <RelatedPostsGrid>{relatedPostsElements}</RelatedPostsGrid>
    </Container>
  );
}
