import Prism from 'prismjs';
import { useEffect } from 'react';
import styled from 'styled-components';
import { PostProps } from '../../types';
import Wrapper from '../container/Wrapper';
import StructuredTextDatoCMS from '../container/StructuredTextDatoCMS';

const StyledPostContent = styled.article`
  overflow: hidden;
`;

export default function PostContent({ post }: { post: PostProps }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  return (
    <Wrapper as={StyledPostContent} width="lg" spacing={0}>
      <StructuredTextDatoCMS data={post.data.post.content} />
    </Wrapper>
  );
}
