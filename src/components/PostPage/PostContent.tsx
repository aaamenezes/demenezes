import Prism from 'prismjs';
import { useEffect } from 'react';
import styled from 'styled-components';
import { PostProps } from '../../types';
import Container from '../Common/Container';
import StructuredTextDatoCMS from './StructuredTextDatoCMS';

const StyledPostContent = styled.article`
  overflow: hidden;
`;

export default function PostContent({ post }: { post: PostProps }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  return (
    <Container as={StyledPostContent} width="lg" spacing={0}>
      <StructuredTextDatoCMS data={post.data.post.content} />
    </Container>
  );
}
