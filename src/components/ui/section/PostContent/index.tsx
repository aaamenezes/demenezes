import StructuredTextDatoCMS from '@/components/ui/container/StructuredTextDatoCMS';
import Wrapper from '@/components/ui/container/Wrapper';
import type { PostProps } from '@/types';
import Prism from 'prismjs';
import { useEffect } from 'react';
import style from './styles.module.css';

export default function PostContent({ post }: { post: PostProps }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  return (
    <Wrapper className={style.postContent} width="lg" spacing={0}>
      <StructuredTextDatoCMS data={post.data.post.content} />
    </Wrapper>
  );
}
