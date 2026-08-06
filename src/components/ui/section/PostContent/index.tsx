import StructuredTextDatoCMS from '@/components/ui/container/StructuredTextDatoCMS';
import Wrapper from '@/components/ui/container/Wrapper';
import Prism from 'prismjs';
import { useEffect } from 'react';
import style from './styles.module.css';
import type { PostContentProps } from './types';

export default function PostContent({ post }: PostContentProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  return (
    <Wrapper className={style.postContent} width="lg">
      <StructuredTextDatoCMS data={post.data.post.content} />
    </Wrapper>
  );
}
