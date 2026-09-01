import Wrapper from '@/components/ui/container/Wrapper';
import Prism from 'prismjs';
import { useEffect } from 'react';
import StructuredTextDatoCMS from './StructuredTextDatoCMS';
import styles from './styles.module.css';
import type { PostContentProps } from './types';

export default function PostContent({ post }: PostContentProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  return (
    <Wrapper className={styles.postContent} width="75ch">
      <StructuredTextDatoCMS data={post.data.post.content} />
    </Wrapper>
  );
}
